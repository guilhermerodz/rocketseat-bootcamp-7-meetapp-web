import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '~/pages/SignUp';
import SignIn from '~/pages/SignIn';

import Dashboard from '~/pages/Dashboard';
import Meetups from '~/pages/Meetups';
import Profile from '~/pages/Profile';
import Details from '~/pages/Details';
import New from '~/pages/New';
import Edit from '~/pages/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignUp} />
      <Route path="/login" component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetups" component={Meetups} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
      <Route path="/new" component={New} isPrivate />
      <Route path="/edit/:id" component={Edit} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
