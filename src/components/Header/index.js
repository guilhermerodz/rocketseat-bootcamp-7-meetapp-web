import React from 'react';
import { Link } from 'react-router-dom';

import adorable from '~/services/adorable';

import Notifications from '~/components/Notifications';

import Logo from '~/components/Logo';
import { Container, Content, Profile } from './styles';

export default function Header() {
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
              <strong>Guilherme Rodz</strong>
              <img src={adorable('Guilherme Rodz')} alt="Guilherme Rodz" />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
