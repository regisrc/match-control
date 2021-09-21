import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, ReactLoadingContainer } from './styles';

const Main = lazy(() => import('../pages/Main'));
const Presence = lazy(() => import('../pages/Presence'));
const ReportsMain = lazy(() => import('../pages/ReportsMain'));
const ReportsPerDate = lazy(() => import('../pages/ReportsPerDate'));
const ReportsPerStudent = lazy(() => import('../pages/ReportsPerStudent'));
const RegistrationMain = lazy(() => import('../pages/RegistrationMain'));
const News = lazy(() => import('../pages/News'));
const StudentRegister = lazy(() => import('../pages/StudentRegister'));
const TeacherRegister = lazy(() => import('../pages/TeacherRegister'));
const Profile = lazy(() => import('../pages/Profile'));

const Loading = (
  <Container>
    <ReactLoadingContainer />
  </Container>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/presence" component={Presence} />
      <Route exact path="/report" component={ReportsMain} />
      <Route exact path="/report/date" component={ReportsPerDate} />
      <Route exact path="/report/student" component={ReportsPerStudent} />
      <Route exact path="/news" component={News} />
      <Route exact path="/registration" component={RegistrationMain} />
      <Route exact path="/registration/student" component={StudentRegister} />
      <Route exact path="/registration/teacher" component={TeacherRegister} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  </Suspense>
);

export default Routes;