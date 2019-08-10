import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { parseISO } from 'date-fns';

import api from '~/services/api';
import { getError } from '~/util/errorHandler';

import schema from '~/validation/Meetup';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import Loading from '~/components/Loading';

import { Container } from '~/styles/Edit';

export default function New({ history, match }) {
  const id = useMemo(() => match.params.id, [match.params.id]);

  const [loading, setLoading] = useState(false);
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        setLoading(true);

        const { data } = await api.get(`meetups/${id}`);

        setMeetup({
          ...data,
          date: parseISO(data.date),
        });

        setLoading(false);
      } catch (err) {
        toast.error(getError(err) || 'Internal error!');
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      await api.put(`meetups/${id}`, data);

      history.push(`/details/${id}`);
      toast.success('Meetup atualizado com sucesso!');
    } catch (err) {
      toast.error(getError(err) || 'Internal error!');
    }
  }

  return (
    <div>
      {!loading ? (
        <Container>
          <Form initialData={meetup} schema={schema} onSubmit={handleSubmit}>
            <BannerInput name="banner_id" />
            <Input name="title" placeholder="Title" />
            {/* <Input name="description" placeholder="Description" /> */}
            <Textarea name="description" placeholder="Description" />
            <DatePicker name="date" placeholder="Date" />
            <Input name="location" placeholder="Location" />

            <button type="submit">Save Meetup!</button>
            <Link to="/meetups">Cancel</Link>
          </Form>
        </Container>
      ) : (
        <Loading />
      )}
    </div>
  );
}

New.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
