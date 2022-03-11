import { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { VerifyCache } from '../context';

import { Container, ReactLoadingContainer } from './styles';

const Login = lazy(() => import('../pages/Login'));
const Main = lazy(() => import('../pages/Main'));
const PresenceGroup = lazy(() => import('../pages/PresenceGroupChoose'));
const Presence = lazy(() => import('../pages/Presence'));
const ReportsMain = lazy(() => import('../pages/ReportsMain'));
const ReportsPerDate = lazy(() => import('../pages/ReportsPerDate'));
const ReportsPerStudent = lazy(() => import('../pages/ReportsPerStudent'));
const News = lazy(() => import('../pages/News'));
const Notifications = lazy(() => import('../pages/Notifications'));
const RegistrationMain = lazy(() => import('../pages/RegistrationMain'));
const StudentRegister = lazy(() => import('../pages/StudentRegister'));
const TeacherRegister = lazy(() => import('../pages/TeacherRegister'));
const ModalityRegister = lazy(() => import('../pages/ModalityRegister'));
const GroupRegister = lazy(() => import('../pages/GroupRegister'));
const NewsRegister = lazy(() => import('../pages/NewsRegister'));
const NotificationRegister = lazy(() => import('../pages/NotificationRegister'));
const ListMain = lazy(() => import('../pages/ListMain'));
const StudentList = lazy(() => import('../pages/StudentList'));
const TeacherList = lazy(() => import('../pages/TeacherList'));
const ModalityList = lazy(() => import('../pages/ModalityList'));
const GroupList = lazy(() => import('../pages/GroupList'));
const NewsList = lazy(() => import('../pages/NewsList'));
const NotificationList = lazy(() => import('../pages/NotificationList'));
const StudentUpdate = lazy(() => import('../pages/StudentUpdate'));
const TeacherUpdate = lazy(() => import('../pages/TeacherUpdate'));
const GroupUpdate = lazy(() => import('../pages/GroupUpdate'));
const ModalityUpdate = lazy(() => import('../pages/ModalityUpdate'));
const NewsUpdate = lazy(() => import('../pages/NewsUpdate'));
const NotificationUpdate = lazy(() => import('../pages/NotificationUpdate'));
const Profile = lazy(() => import('../pages/Profile'));

const Loading = (
  <Container>
    <ReactLoadingContainer />
  </Container>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/presenceGroup" component={PresenceGroup} />
      <Route exact path="/presenceGroup/presence/:id" component={Presence} />
      <Route exact path="/report" component={ReportsMain} />
      <Route exact path="/report/date" component={ReportsPerDate} />
      <Route exact path="/report/student" component={ReportsPerStudent} />
      <Route exact path="/news" component={News} />
      <Route exact path="/notifications" component={Notifications} />
      <Route exact path="/registration" component={RegistrationMain} />
      <Route exact path="/registration/student" component={StudentRegister} />
      <Route exact path="/registration/teacher" component={TeacherRegister} />
      <Route exact path="/registration/modality" component={ModalityRegister} />
      <Route exact path="/registration/group" component={GroupRegister} />
      <Route exact path="/registration/news" component={NewsRegister} />
      <Route exact path="/registration/notifications" component={NotificationRegister} />
      <Route exact path="/list" component={ListMain} />
      <Route exact path="/list/student" component={StudentList} />
      <Route exact path="/list/teacher" component={TeacherList} />
      <Route exact path="/list/modality" component={ModalityList} />
      <Route exact path="/list/group" component={GroupList} />
      <Route exact path="/list/news" component={NewsList} />
      <Route exact path="/list/notifications" component={NotificationList} />
      <Route path="/update/student/:id" component={StudentUpdate} />
      <Route path="/update/teacher/:id" component={TeacherUpdate} />
      <Route path="/update/group/:id" component={GroupUpdate} />
      <Route path="/update/modality/:id" component={ModalityUpdate} />
      <Route path="/update/news/:id" component={NewsUpdate} />
      <Route path="/update/notification/:id" component={NotificationUpdate} />
      <Route exact path="/profile" component={Profile} />
    </Switch> 
  </Suspense>
);

export default Routes;