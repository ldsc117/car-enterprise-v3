import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

import Cars from "./components/Cars";
import CarMarket from "./components/CarMarket";
import Employees from "./components/Employees";
import AdminPage from "./components/AdminPage";



export default class App extends Component {
    static displayName = App.name;


  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/employees' component={Employees} />
        <Route path='/admin' component={AdminPage} />
        <AuthorizeRoute path="/cars" exact component={Cars} />
        <AuthorizeRoute path="/carmarket" exact component={CarMarket} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
