import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignUp() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">Go for Meetups!</button>
        <Link to="/login">I'm already registered</Link>
      </Form>
    </>
  );
}
