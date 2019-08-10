import React, { useState, useEffect, useMemo, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import {
  MdLocationOn,
  MdClose,
  MdTimer,
  MdChevronLeft,
  MdChevronRight,
  MdFlag,
} from 'react-icons/md';

import { format, parseISO } from 'date-fns';
import us from 'date-fns/locale/en-US';

import api from '~/services/api';
import adorable from '~/services/adorable';
import { getError } from '~/util/errorHandler';
import { formatDescription } from '~/util/format';

import Tooltip from '~/styles/Tooltip';
import Loading from '~/components/Loading';

import {
  Container,
  GrayButton,
  RedButton,
  BlueButton,
  CancellationModal,
  SubscribersModal,
} from './styles';

const formatDate = d => format(d, "MMMM dd yyyy' at' H:mm aa", { locale: us });

export default function Details({ history, match }) {
  const isMounted = useRef();

  const [updateCount, setUpdateCount] = useState(1);

  const id = useMemo(
    () => ({
      value: match.params.id,
      updates: updateCount,
    }),
    [match.params.id, updateCount]
  );
  const userId = useSelector(store => store.user.profile.id);

  const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

  /**
   * Modal
   */
  const [cancelModalOpen, setCancelModalOpen] = useState(false);

  const [subModalOpen, setSubModalOpen] = useState(false);
  const [subModalLoading, setSubModalLoading] = useState(true);
  const [subModalPage, setSubModalPage] = useState(1);
  const [subModalContent, setSubModalContent] = useState({});
  const [subModalOut, setSubModalOut] = useState(false);
  const [subModalTask, setSubModalTask] = useState(false);

  useEffect(() => {
    async function loadMeetup() {
      try {
        setLoading(true);

        const { data } = await api.get(`meetups/${id.value}`);

        data.formattedDate = formatDate(parseISO(data.date));
        data.formattedDescription = formatDescription(data.description);

        if (!isMounted.current) return;

        setSubscribed(data.subscribed);
        setMeetup(data);
        setLoading(false);

        delete data.subscribed;
      } catch (err) {
        toast.error(getError(err) || 'Internal server error!');
      }
    }

    loadMeetup();
  }, [id]);

  useEffect(() => {
    async function loadSubscribersPage() {
      setSubModalLoading(true);

      const response = await api.get(`subscriptions/${id.value}`, {
        params: {
          page: subModalPage,
        },
      });

      if (!isMounted.current) return;

      const { subscribers, hasNext } = response.data;

      setSubModalContent({ subscribers, hasNext });
      setSubModalLoading(false);
    }

    loadSubscribersPage();
  }, [id, subModalPage]);

  async function handleCancelMeetup() {
    try {
      await api.delete(`meetups/${id.value}`);

      history.push('/meetups');
      toast.warn('Meetup canceled.');
    } catch (err) {
      toast.error(getError(err) || "Failed! Can't cancel your meetup.");
    }
  }

  async function handleSubscribe(subscribe) {
    try {
      if (subscribe) await api.post(`subscriptions/${id.value}`);
      else await api.delete(`subscriptions/${id.value}`);

      setUpdateCount(updateCount + 1);

      if (subscribe)
        toast.success(`You are now subscribed at ${meetup.title}! ;)`);
      else toast.warn(`Unsubscribed from ${meetup.title}. ;(`);
    } catch (err) {
      toast.error(
        getError(err) ||
          `Failed attempting to ${!subscribe ? 'un' : ''}subscribe!`
      );
    }
  }

  async function handleSubPage(next) {
    if (subModalTask) return;

    const nextPage = subModalPage + (next ? 1 : -1);
    setSubModalOut(true);

    setSubModalTask(
      setTimeout(() => {
        if (!isMounted.current) return;

        setSubModalOut(false);
        setSubModalPage(nextPage);

        setSubModalTask(false);
      }, 700)
    );
  }

  function renderDescription() {
    return (
      <>
        {meetup.formattedDescription.map(paragraph => (
          <div key={String(paragraph.id)}>
            <h3>{paragraph.content}</h3>
            {paragraph.br && <br />}
          </div>
        ))}
      </>
    );
  }

  return (
    <div ref={isMounted}>
      {!loading ? (
        <>
          <Container animate={updateCount === 1}>
            <header>
              {!meetup.canceled_at ? (
                <h1>{meetup.title}</h1>
              ) : (
                <>
                  <div>
                    <span
                      style={{
                        opacity: 0.6,
                        color: '#525252',
                        textDecoration: 'line-through',
                      }}
                    >
                      <h1 style={{ color: '#eee' }}>{meetup.title}</h1>
                    </span>
                    <span className="canceled-tag">Canceled</span>
                  </div>
                </>
              )}
              <div>
                {userId === meetup.owner.id &&
                  !meetup.canceled_at &&
                  !meetup.past && (
                    <>
                      <RedButton
                        onClick={() => history.push(`/edit/${id.value}`)}
                      >
                        Edit
                      </RedButton>
                      <BlueButton onClick={() => setCancelModalOpen(true)}>
                        Cancel
                      </BlueButton>
                    </>
                  )}
              </div>
            </header>
            <div className="banner">
              <img src={meetup.banner.url} alt={meetup.title} />
            </div>
            <div className="info">
              {renderDescription()}
              <footer>
                <div className="details">
                  <div>
                    <MdTimer color="#fff" size={18} />
                    <time>{meetup.formattedDate}</time>
                  </div>
                  <div>
                    <MdLocationOn color="#fff" size={18} />
                    <a
                      href={`https://www.google.com/maps/search/${meetup.location}`}
                    >
                      {meetup.location}
                    </a>
                  </div>
                </div>
                <div className="powered">
                  <span>Powered by</span>
                  <strong>{meetup.owner.name}</strong>
                  <img
                    src={
                      meetup.owner.avatar
                        ? meetup.owner.avatar.url
                        : adorable(meetup.owner.name)
                    }
                    alt={meetup.owner.name}
                  />
                </div>
                <div className="subscribe">
                  <div className="subscribe-actions">
                    {meetup.canceled_at && (
                      <GrayButton type="button" disabled>
                        Canceled
                      </GrayButton>
                    )}
                    {!meetup.canceled_at &&
                      (!subscribed ? (
                        <RedButton
                          onClick={() => handleSubscribe(true)}
                          type="button"
                        >
                          Subscribe
                        </RedButton>
                      ) : (
                        <BlueButton
                          onClick={() => handleSubscribe(false)}
                          type="button"
                        >
                          Unsubscribe
                        </BlueButton>
                      ))}
                  </div>
                  <ul className="subscribers">
                    {meetup.subscribers.map(subscriber => (
                      <li key={String(subscriber.id)}>
                        <img
                          src={
                            subscriber.avatar
                              ? subscriber.avatar.url
                              : adorable(subscriber.name)
                          }
                          alt={subscriber.name}
                        />
                        <Tooltip className="subscriber-tooltip">
                          {subscriber.name}
                        </Tooltip>
                      </li>
                    ))}
                    {meetup.restOfSubscribers > 0 && (
                      <li>
                        <button
                          className="rest"
                          onClick={() => setSubModalOpen(true)}
                          type="button"
                        >
                          +{meetup.restOfSubscribers}
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </footer>
            </div>
          </Container>

          <CancellationModal open={cancelModalOpen}>
            <div className="content">
              <header>
                <button
                  onClick={() => setCancelModalOpen(false)}
                  className="close"
                  type="button"
                >
                  <MdClose color="#fff" size={20} />
                </button>
                <span>Do you really want to cancel this meetup?</span>
              </header>

              <div>
                <RedButton onClick={() => setCancelModalOpen(false)}>
                  No, send me back
                </RedButton>
                <BlueButton onClick={handleCancelMeetup}>
                  Yes, I'm sure
                </BlueButton>
              </div>
            </div>
          </CancellationModal>

          <SubscribersModal open={subModalOpen} subModalOut={subModalOut}>
            <div className="content">
              {!subModalLoading ||
              (subModalContent.subscribers &&
                subModalContent.subscribers.length > 0) ? (
                <>
                  <header>
                    <button
                      onClick={() => setSubModalOpen(false)}
                      className="close"
                      type="button"
                    >
                      <MdClose color="#fff" size={20} />
                    </button>
                    <span>
                      Subscribers of <strong>{meetup.title}</strong>
                    </span>
                  </header>

                  {subModalContent.subscribers.length > 0 ? (
                    <div className="subs">
                      <ul>
                        {subModalContent.subscribers.map(subscriber => (
                          <li key={String(subscriber.id)}>
                            <img
                              src={
                                subscriber.avatar
                                  ? subscriber.avatar.url
                                  : adorable(subscriber.name)
                              }
                              alt={subscriber.name}
                            />
                            <span>{subscriber.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <div className="no-subs">
                      <MdFlag color="#fff" size={40} />
                      <span>
                        Whoops! There isn't any subscribers in this page.
                      </span>
                    </div>
                  )}

                  <footer>
                    {subModalPage > 1 && (
                      <button
                        onClick={() => handleSubPage(false)}
                        type="button"
                      >
                        <MdChevronLeft color="#fff" size={30} />
                      </button>
                    )}
                    <span>{subModalPage}</span>
                    {subModalContent.hasNext && (
                      <button onClick={() => handleSubPage(true)} type="button">
                        <MdChevronRight color="#fff" size={30} />
                      </button>
                    )}
                  </footer>
                </>
              ) : (
                <Loading only />
              )}
            </div>
          </SubscribersModal>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
