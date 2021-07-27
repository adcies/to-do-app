import React from 'react';
import { useState } from 'react';

import createInitialInputValues from '../../helpers/initialInputValues';

import { add, edit, disable } from '../../actions';

import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import './Form.scss';

import { parseDateToInputFormat } from '../../helpers/dateParser';

const today = new Date().toLocaleDateString();
const date = parseDateToInputFormat(today);

const Form = ({ isEditForm }) => {
  const { isEditEnabled, id, taskData } = useSelector((state) => state.edit);
  const dispatch = useDispatch();

  const initialInputsValues = isEditEnabled
    ? taskData
    : createInitialInputValues(date);

  const [inputs, setInputs] = useState(initialInputsValues);
  const [isValidationWrong, setIsValidationWrong] = useState(false);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setInputs((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!inputs.task.trim() && (!isEditEnabled || isEditForm)) {
      setIsValidationWrong(true);
    } else if (!isEditForm && !isEditEnabled) {
      const id = uuidv4();
      const taskData = { ...inputs, id };
      dispatch(add(taskData));
      setIsValidationWrong(false);
      setInputs(initialInputsValues);
    } else if (isEditForm) {
      const taskData = { ...inputs, id };
      dispatch(edit(taskData));
      setInputs(initialInputsValues);
      setIsValidationWrong(false);
      dispatch(disable());
    }
  };

  const optionalValidationErrorMessage = isValidationWrong ? (
    <p className="main-form__validation-info">Input cannot be empty!</p>
  ) : null;

  return (
    <form className="main-form" onSubmit={handleOnSubmit}>
      {isEditForm ? (
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(disable());
          }}
          className="main-form__btn main-form__close"
        >
          Close
        </button>
      ) : null}
      <input
        value={inputs.task}
        onChange={handleOnChange}
        className="main-form__task-input"
        type="text"
        placeholder="Add your todo"
        name="task"
        maxLength="50"
      />
      <input
        type="submit"
        className="main-form__btn main-form__submit"
        value={isEditForm ? 'Edit' : 'Add'}
      />
      <br />
      <label
        className="main-form__date-label"
        htmlFor={isEditForm ? 'date-edit' : 'date'}
      >
        To be done by:
        <input
          id={isEditForm ? 'date-edit' : 'date'}
          className="main-form__date"
          type="date"
          name="date"
          value={inputs.date}
          onChange={handleOnChange}
          min={date}
        />
      </label>
      <br />
      <label
        className="main-form__priority-label"
        htmlFor={isEditForm ? 'priority-edit' : 'priority'}
      >
        Priority
        <input
          className="main-form__priority"
          type="checkbox"
          id={isEditForm ? 'priority-edit' : 'priority'}
          name="priority"
          onChange={handleOnChange}
          checked={inputs.priority}
        />
      </label>
      {optionalValidationErrorMessage}
    </form>
  );
};

export default Form;
