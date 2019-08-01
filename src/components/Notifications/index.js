import React from 'react';

import { MdNotifications } from 'react-icons/md';

import colors from '~/styles/colors';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color={colors.red} size={20} />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Guilherme signed up for your Meetup!</p>
            <div>
              <time>2 days ago</time>
              <button type="button">Mark as read</button>
            </div>
          </Notification>
          <Notification>
            <p>Guilherme signed up for your Meetup!</p>
            <div>
              <time>2 days ago</time>
              <button type="button">Mark as read</button>
            </div>
          </Notification>
          <Notification>
            <p>Guilherme signed up for your Meetup!</p>
            <div>
              <time>2 days ago</time>
              <div>
                <button type="button">Mark as read</button>
              </div>
            </div>
          </Notification>
          <Notification>
            <p>Guilherme signed up for your Meetup!</p>
            <div>
              <time>2 days ago</time>
              <div>
                <button type="button">Mark as read</button>
              </div>
            </div>
          </Notification>
          <Notification>
            <p>Guilherme signed up for your Meetup!</p>
            <div>
              <time>2 days ago</time>
              <div>
                <button type="button">Mark as read</button>
              </div>
            </div>
          </Notification>
          <Notification>
            <p>Guilherme signed up for your Meetup!</p>
            <div>
              <time>2 days ago</time>
              <div>
                <button type="button">Mark as read</button>
              </div>
            </div>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}
