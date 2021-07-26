import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import './Task.scss';

const Task = ({ taskData }) => {
  const { task, date, priority } = taskData;

  const priorityMark = priority ? (
    <span className="task__priority-mark">
      <FontAwesomeIcon icon={faExclamation} />
    </span>
  ) : null;

  return (
    <div className="task">
      <p className="task__content">
        {priorityMark}
        {task}
      </p>
      <p className="task__date-info">
        To be done by:
        <span className="task__date">{` ${date}`}</span>
      </p>
      <div className="task__btn-container">
        <div className="task__btn-wrapper">
          <button className="task__btn task__edit">Edit</button>
          <button className="task__btn task__delete">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Task;
