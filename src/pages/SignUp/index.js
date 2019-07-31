import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signUpRequest } from '~/store/modules/auth/actions';

import schema from '~/validation/SignUp';

import Logo from '~/components/Logo';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useStore(state => state.auth.loading);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <Logo />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your full name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Your secret password"
        />

        <button type="submit">
          {loading ? 'Registering...' : 'Go for Meetups!'}
        </button>
        <Link to="/login">I'm already registered</Link>
      </Form>
    </>
  );
}
