import React from 'react';
import { Route } from 'react-router-dom';
import { loginPath, profilePath, rootPath } from '../../../utils/paths';
import { HomePageRoot } from '../../home-page/root';
import { LogInPageRoot } from '../../login-page/root';
import { ProfilePage } from '../../profile-page/root';
import { AuthRoute } from '../auth-route';

export const AppRoutes = () => (
  <>
    <Route component={HomePageRoot} exact path={rootPath} />
    <Route component={LogInPageRoot} path={loginPath} />
    <AuthRoute component={ProfilePage} path={profilePath} />
  </>
);
