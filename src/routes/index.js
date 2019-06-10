import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import HeroesListContainer from '@components/HeroesListContainer';

const routes = (
  <Switch>
    <Route path="/heroes/:id?" component={HeroesListContainer} />
    <Route path="/heroesss" component={HeroesListContainer} />
    <Redirect from="/" to="/heroes" />
  </Switch>
);

export default routes;
