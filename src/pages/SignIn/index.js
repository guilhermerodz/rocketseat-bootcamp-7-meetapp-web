import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="MeetApp" />

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Insert your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">Login</button>
        <Link to="/">Register for free!</Link>
      </Form>
    </>
  );
}
