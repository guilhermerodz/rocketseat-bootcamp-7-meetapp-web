import React from 'react';
import { Link } from 'react-router-dom';

import { Meetup } from './styles';

export default function MeetupCard({ meetup }) {
  return (
    <Meetup key={String(meetup.id)}>
      <Link to={`details/${meetup.id}`}>
        {meetup.banner && (
          <div className="meetup-crop">
            <img src={meetup.banner.url} alt="Banner" />
          </div>
        )}
        <div
          style={{ opacity: !meetup.canceled_at ? 1 : 0.5 }}
          className="meetup-info"
        >
          {!meetup.canceled_at ? (
            <h2>{meetup.title}</h2>
          ) : (
            <h2>
              <strike>{meetup.title}</strike>
            </h2>
          )}
          <time>{meetup.formattedDate}</time>
        </div>
      </Link>
    </Meetup>
  );
}
