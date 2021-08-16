import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { ReactLoadingContainer } from './styles';

const Main = lazy(() => import('../pages/Main'));

const Loading = (
  <div>
    <ReactLoadingContainer />
  </div>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Suspense>
);

export default Routes;