import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import adorable from '~/services/adorable';

import Notifications from '~/components/Notifications';

import Logo from '~/components/Logo';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <Logo />
          <Link to="/meetups">My meetups</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <Link to="/profile">
              <strong>{profile.name}</strong>
              <img
                src={
                  profile.avatar ? profile.avatar.url : adorable(profile.name)
                }
                alt={profile.name}
              />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
