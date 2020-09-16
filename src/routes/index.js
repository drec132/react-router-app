import React from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { routes } from './_routes';
import RouteWrapper from './RouteWrapper';

export default function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <RouteWrapper key={i} {...route} />
      ))}
      <Redirect to={'/login'} />
    </Switch>
  );
}
