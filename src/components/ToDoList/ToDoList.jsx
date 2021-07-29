import React from 'react';
import { useState } from 'react';

import SortSwitcher from '../SortSwitcher/SortSwitcher';
import Task from '../Task/Task';
import Modal from '../Modal/Modal';
import Form from '../Form/Form';

import { useSelector } from 'react-redux';

import './ToDoList.scss';

const ToDoList = ({ isFullList }) => {
  const [enableButtons, setEnableButtons] = useState(true);
  const [showProrities, setShowProrities] = useState(false);
  const [sortByNewest, setSortByNewest] = useState(true);
  const edit = useSelector((state) => state.edit);

  const createTasksArray = (isFullList) => {
    const tasksItems = showProrities
      ? [...tasks].filter((task) => task.priority)
      : [...tasks];
    if (!isFullList) {
      return tasksItems.reverse().slice(0, 5);
    }

    if (sortByNewest) {
      return tasksItems.reverse();
    }
    const tasksByDate = tasksItems.sort((a, b) => {
      if (new Date(a.date) - new Date(b.date) === 0) {
        return -1; //newer tasks with the same date will be higher
      }
      return new Date(a.date) - new Date(b.date);
    });
    return tasksByDate;
  };

  const tasks = useSelector((state) => state.tasks);

  const tasksToDisplay = createTasksArray(isFullList);

  const tasksElements = tasksToDisplay.map((task) => (
    <Task
      enableBtn={enableButtons}
      handleEnableBtn={(enable) => {
        setEnableButtons(enable);
      }}
      key={task.id}
      taskData={task}
      isFull={isFullList ? isFullList : null}
    />
  ));

  const handleOnChange = () => {
    setShowProrities((prevValue) => !prevValue);
  };

  return (
    <>
      {edit.isEditEnabled && (
        <Modal>
          <Form isEditForm={true} />
        </Modal>
      )}
      <section className="todo-container">
        <div className="todo-container__info">
          {isFullList
            ? 'All todos will be below'
            : '5 newest todos will be below'}
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
          {isFullList ? (
            <SortSwitcher
              sortByNewest={sortByNewest}
              handleOnChange={() => {
                setSortByNewest((prevValue) => !prevValue);
              }}
            />
          ) : null}
        </div>

        <div className="todo-container__list-wrapper">{tasksElements}</div>
      </section>
    </>
  );
};

export default ToDoList;
