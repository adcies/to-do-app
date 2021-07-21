import React from 'react';

import Form from '../../components/Form/Form';
import ToDoList from '../../components/ToDoList/ToDoList';

import './Main.scss';

const Main = () => {
  return (
    <main className="main">
      <Form />
      <ToDoList />
    </main>
  );
};

export default Main;
