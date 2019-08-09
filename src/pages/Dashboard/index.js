import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import us from 'date-fns/locale/en-US';
import { MdChevronLeft, MdChevronRight, MdFlag } from 'react-icons/md';

import api from '~/services/api';

import Loading from '~/components/Loading';

import { Container, Button, Meetup, Pagination, NoMeetups } from './styles';

const formatDate = d => format(d, "MMMM dd yyyy' at' H:mm aa", { locale: us });

export default function Dashboard({ history }) {
  const [loading, setLoading] = useState(false);

  const [searchInput, setSearchInput] = useState('');
  const [searchTask, setSearchTask] = useState(false);

  const [query, setQuery] = useState({
    page: 1,
    search: '',
  });
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadMeetups() {
      setLoading(true);

      const response = await api.get('available', {
        params: {
          page: query.page,
          search: query.search,
          to: 'all',
        },
      });

      if (!isMounted) return;

      const data = response.data.map(meetup => ({
        ...meetup,
        formattedDate: formatDate(parseISO(meetup.date)),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();

    return () => {
      isMounted = false;
    };
  }, [query.page, query.search]);

  async function handleInputChange(e) {
    if (searchTask) clearTimeout(searchTask);

    const { value } = e.target;

    setSearchInput(value);

    setSearchTask(
      setTimeout(() => {
        setQuery({
          ...query,
          page: 1,
          search: value,
        });
        setSearchTask(false);
      }, 500)
    );
  }

  async function handlePageChange(next) {
    const nextPage = query.page + (next ? 1 : -1);

    setQuery({
      ...query,
      page: nextPage,
    });
  }

  return (
    <Container>
      <header>
        <strong>Incoming Meetups</strong>

        <input
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search by name..."
        />

        <Button onClick={() => history.push('/new')}>New Meetup</Button>
      </header>
      <nav>
        {!loading ? (
          <>
            {meetups.length > 0 ? (
              <ul>
                {meetups.map(meetup => (
                  <Meetup key={String(meetup.id)}>
                    <Link to={`details/${meetup.id}`}>
                      {meetup.banner && (
                        <div className="meetup-crop">
                          <img src={meetup.banner.url} alt="Banner" />
                        </div>
                      )}
                      <div className="meetup-info">
                        <h2>{meetup.title}</h2>
                        <time>{meetup.formattedDate}</time>
                      </div>
                    </Link>
                  </Meetup>
                ))}
              </ul>
            ) : (
              <NoMeetups>
                <MdFlag color="#fff" size={40} />
                <span>Whoops! There isn't any meetups in this page.</span>
              </NoMeetups>
            )}

            <Pagination>
              {query.page > 1 && (
                <button onClick={() => handlePageChange(false)} type="button">
                  <MdChevronLeft color="#fff" size={30} />
                </button>
              )}
              <span>{query.page}</span>

              {meetups.length > 0 && (
                <button onClick={() => handlePageChange(true)} type="button">
                  <MdChevronRight color="#fff" size={30} />
                </button>
              )}
            </Pagination>
          </>
        ) : (
          <Loading />
        )}
      </nav>
    </Container>
  );
}
