import React from 'react';

import './ToDoList.scss';

const ToDoList = () => {
  return (
    <section className="todo-container">
      <p className="todo-container__info">
        Newest todos will be displayed below
      </p>
      <div className="todo-container__list-wrapper"></div>
    </section>
  );
};

export default ToDoList;
