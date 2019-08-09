import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import us from 'date-fns/locale/en-US';
import { MdFlag } from 'react-icons/md';

import api from '~/services/api';

import Loading from '~/components/Loading';

import { Container, Button, Meetup, NoMeetups } from './styles';

const formatDate = d => format(d, "MMMM dd yyyy' at' H:mm aa", { locale: us });

export default function Meetups({ history }) {
  const [method, setMethod] = useState('meetups');
  const [loading, setLoading] = useState(false);

  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadMeetups() {
      setLoading(true);

      const response = await api.get(method);

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
  }, [method]);

  return (
    <Container>
      <header>
        <div>
          <strong
            onClick={() => setMethod('meetups')}
            className={method === 'meetups' ? 'active' : ''}
          >
            My Meetups
          </strong>
          <strong
            onClick={() => setMethod('subscriptions')}
            className={method === 'subscriptions' ? 'active' : ''}
          >
            Subscriptions
          </strong>
        </div>

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
          </>
        ) : (
          <Loading />
        )}
      </nav>
    </Container>
  );
}
