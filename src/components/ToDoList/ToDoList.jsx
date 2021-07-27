import React from 'react';
import { useState } from 'react';

import Task from '../Task/Task';
import EditContainer from '../EditContainer/EditContainer';

import { useSelector } from 'react-redux';

import './ToDoList.scss';

const ToDoList = () => {
  const [showProrities, setShowProrities] = useState(false);
  const edit = useSelector((state) => state.edit);

  const createTasksArray = () => {
    if (showProrities) {
      return reversedTasks.filter((task) => task.priority).slice(0, 5);
    }
    return reversedTasks.slice(0, 5);
  };

  const tasks = useSelector((state) => state.tasks);
  const reversedTasks = [...tasks].reverse();

  const fiveNewestTasks = createTasksArray();

  const tasksElements = fiveNewestTasks.map((task) => (
    <Task key={task.id} taskData={task} />
  ));

  const handleOnChange = () => {
    setShowProrities((prevValue) => !prevValue);
  };

  return (
    <>
      {edit.isEditEnabled && <EditContainer />}
      <section className="todo-container">
        <p className="todo-container__info">
          5 newest todos will be below
          <label
            className="todo-container__prorities-label"
            htmlFor="prorities"
          >
            Show prorities only
            <input
              className="todo-container__prorities-input"
              id="prorities"
              type="checkbox"
              checked={showProrities}
              onChange={handleOnChange}
            />
          </label>
        </p>
        <div className="todo-container__list-wrapper">{tasksElements}</div>
      </section>
    </>
  );
};

export default ToDoList;
