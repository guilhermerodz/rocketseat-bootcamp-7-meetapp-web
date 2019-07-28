import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <form action="">
        <input placeholder="Your full name" />
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your secret password" />

        <button type="submit">Go for Meetups!</button>
        <Link to="/login">I'm already registered</Link>
      </form>
    </>
  );
}
