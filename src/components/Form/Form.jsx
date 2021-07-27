import React from 'react';
import { useState } from 'react';

import { parseDateToInputFormat } from '../../helpers/dateParser';
import createInitialInputValues from '../../helpers/initialInputValues';

import { add } from '../../actions';

import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import './Form.scss';

const today = new Date().toLocaleDateString();
const date = parseDateToInputFormat(today);
const initialInputsValues = createInitialInputValues(date);

const Form = () => {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState(initialInputsValues);

  const [isValidationWrong, setIsValidationWrong] = useState(false);

  const handleOnChange = ({ target }) => {
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    setInputs((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!inputs.task.trim()) {
      setIsValidationWrong(true);
    } else {
      const id = uuidv4();
      const taskData = { ...inputs, id };
      dispatch(add(taskData));
      setIsValidationWrong(false);
      setInputs(initialInputsValues);
    }
  };

  const optionalValidationErrorMessage = isValidationWrong ? (
    <p className="main-form__validation-info">Input cannot be empty!</p>
  ) : null;

  return (
    <form className="main-form" onSubmit={handleOnSubmit}>
      <input
        value={inputs.task}
        onChange={handleOnChange}
        className="main-form__task-input"
        type="text"
        placeholder="Add your todo"
        name="task"
        maxLength="50"
      />
      <input type="submit" className="main-form__submit" value="Add" />
      <br />
      <label className="main-form__date-label" htmlFor="date">
        To be done by:
        <input
          id="date"
          className="main-form__date"
          type="date"
          name="date"
          value={inputs.date}
          onChange={handleOnChange}
          min={date}
        />
      </label>
      <br />
      <label className="main-form__priority-label" htmlFor="priority">
        Priority
        <input
          className="main-form__priority"
          type="checkbox"
          id="priority"
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
