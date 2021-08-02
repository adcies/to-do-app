import React from 'react';

import { Route, Switch } from 'react-router';

import Home from '../../pages/Home/Home';
import AllTasks from '../../pages/AllTasks/AllTasks';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tasks" exact component={AllTasks} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
  );
};

export default Main;
