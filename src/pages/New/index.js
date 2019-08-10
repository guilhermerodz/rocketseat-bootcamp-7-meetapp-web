import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { getError } from '~/util/errorHandler';

import schema from '~/validation/Meetup';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import { Container } from '~/styles/Edit';

export default function New({ history }) {
  async function handleSubmit(data) {
    try {
      const response = await api.post('meetups', data);
      const { id } = response.data;

      history.push(`/details/${id}`);
    } catch (err) {
      toast.error(getError(err) || 'Internal error!');
    }
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
