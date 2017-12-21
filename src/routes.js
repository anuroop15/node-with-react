'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/">
    <IndexRoute/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
