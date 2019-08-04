import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

import { getError } from '~/util/errorHandler';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile successfully updated!');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(
      getError(err) || 'Something is wrong... Check your credentials.'
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
