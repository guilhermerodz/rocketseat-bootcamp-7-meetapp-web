import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdCameraAlt } from 'react-icons/md';

import schema from '~/validation/Meetup';

import Logo from '~/components/Logo';

export default function New() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(data) {
    console.log(data);
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
