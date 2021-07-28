import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';

import { remove, disable, enable } from '../../actions';

import './Task.scss';

const Task = ({ taskData }) => {
  const { task, date, priority, id } = taskData;
  const { isEditEnabled } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(disable());
    setTimeout(() => {
      dispatch(enable(taskData));
    }, 100);
  };

  const handleDelete = () => {
    if (!isEditEnabled) {
      dispatch(remove(id));
    }
  };

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
          <button className="task__btn task__edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="task__btn task__delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
