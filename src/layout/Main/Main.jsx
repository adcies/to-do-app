import React from 'react';

import { Route, Switch } from 'react-router';

import Start from '../../pages/Start/Start';
import AllTasks from '../../pages/AllTasks/AllTasks';

import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/tasks" component={AllTasks} />
      </Switch>
    </main>
  );
};

export default Main;
