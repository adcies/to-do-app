import React from 'react';

import Task from '../Task/Task';

import { useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import './ToDoList.scss';

const ToDoList = () => {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  const fiveNewestTasks = [...tasks].reverse().slice(0, 5);
  const tasksElements = fiveNewestTasks.map((task) => (
    <Task key={uuidv4()} taskData={task} />
  ));

  return (
    <section className="todo-container">
      <p className="todo-container__info">
        5 newest todos will be displayed below
      </p>
      <div className="todo-container__list-wrapper">{tasksElements}</div>
    </section>
  );
};

export default ToDoList;
