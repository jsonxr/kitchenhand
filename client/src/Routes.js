import React, { Suspense, lazy } from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import {
  Dashboard as DashboardView,
  UserList as UserListView,
  Typography as TypographyView,
  Icons as IconsView,
  Account as AccountView,
  Settings as SettingsView,
  SignUp as SignUpView,
  SignIn as SignInView,
  NotFound as NotFoundView,
} from './views';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const RecipesPage = lazy(async () => {
  console.log('loading...');
  const page = import('./pages/recipes/RecipesPage');
  await delay(300);
  return page;
});
const ShoppingListPage = lazy(() => import('./pages/shopping-list/ShoppingListPage'));

// import RecipesPage from './pages/recipes/RecipesPage';
// import ShoppingListPage from './pages/shopping-list/ShoppingListPage';

const Routes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        <RouteWithLayout component={DashboardView} exact layout={MainLayout} path="/dashboard" />
        <RouteWithLayout component={UserListView} exact layout={MainLayout} path="/users" />
        <RouteWithLayout component={RecipesPage} exact layout={MainLayout} path="/recipes" />
        <RouteWithLayout component={ShoppingListPage} exact layout={MainLayout} path="/shopping-list" />

        <RouteWithLayout component={TypographyView} exact layout={MainLayout} path="/typography" />
        <RouteWithLayout component={IconsView} exact layout={MainLayout} path="/icons" />
        <RouteWithLayout component={AccountView} exact layout={MainLayout} path="/account" />
        <RouteWithLayout component={SettingsView} exact layout={MainLayout} path="/settings" />
        <RouteWithLayout component={SignUpView} exact layout={MinimalLayout} path="/sign-up" />
        <RouteWithLayout component={SignInView} exact layout={MinimalLayout} path="/sign-in" />
        <RouteWithLayout component={NotFoundView} exact layout={MinimalLayout} path="/not-found" />
        <Redirect to="/not-found" />
      </Switch>
    </Suspense>
  );
};

export default Routes;
