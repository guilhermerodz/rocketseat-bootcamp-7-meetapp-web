import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <form action="">
        <input type="email" placeholder="Insert your e-mail" />
        <input type="password" placeholder="Your secret password" />

        <button type="submit">Login</button>
        <Link to="/">Register for free!</Link>
      </form>
    </>
  );
}
