import React from 'react';

import './Task.scss';

const Task = () => {
  return (
    <div className="task">
      <p className="task__content"></p>
      <p className="task__date-info">
        To be done by:
        <span className="task__date"></span>
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
