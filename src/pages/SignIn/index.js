import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import schema from '~/validation/SignIn';

import Logo from '~/components/Logo';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Logo />

      <Form schema={schema} onSubmit={handleSubmit}>
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
