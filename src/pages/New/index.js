import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import schema from '~/validation/Meetup';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container } from './styles';

export default function New() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Title" />
        <Input name="description" placeholder="Description" />
        <DatePicker name="date" placeholder="Date" />
        <Input name="location" placeholder="Location" />

        <button type="submit">Create Meetup!</button>
        <Link to="/meetups">Cancel</Link>
      </Form>
    </Container>
  );
}
