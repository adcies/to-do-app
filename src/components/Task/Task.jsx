import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import Weather from '../Weather/Weather';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';

import { remove, enable } from '../../actions';

import './Task.scss';
import { useEffect } from 'react';

const Task = ({ taskData, isFull, enableBtn, handleEnableBtn }) => {
  const [showWeather, setShowWeather] = useState(false);
  const { task, date, priority, id } = taskData;
  const { isEditEnabled } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      handleHideWeather();
    };
    // eslint-disable-next-line
  }, []);

  const handleEdit = () => {
    dispatch(enable(taskData));
  };

  const handleDelete = () => {
    dispatch(remove(id));
  };

  const handleShowWeather = () => {
    if (!showWeather) {
      handleEnableBtn(false);
      setShowWeather(true);
    }
  };

  const handleHideWeather = () => {
    if (showWeather) {
      handleEnableBtn(true);
      setShowWeather(false);
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
      {isFull ? (
        <button
          disabled={!enableBtn || isEditEnabled}
          className="task__open-weather"
          onClick={handleShowWeather}
        >
          Check the weather!
        </button>
      ) : null}
      {showWeather ? (
        <Modal>
          <Weather closeWeather={handleHideWeather} />
        </Modal>
      ) : null}
      <p className="task__date-info">
        To be done by:
        <span className="task__date">{` ${date}`}</span>
      </p>
      <div className="task__btn-container">
        <div className="task__btn-wrapper">
          <button
            disabled={!enableBtn || isEditEnabled}
            className="task__btn task__edit"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            disabled={!enableBtn || isEditEnabled}
            className="task__btn task__delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
