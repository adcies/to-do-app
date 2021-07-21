import React from 'react';
import { useState } from 'react';

import './Form.scss';

const Form = () => {
  const [value, setValue] = useState('');
  const [isValidationWrong, setIsValidationWrong] = useState(false);

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      setIsValidationWrong(true);
    } else {
      setIsValidationWrong(false);
    }
    setValue('');
  };

  const optionalValidationErrorMessage = isValidationWrong ? (
    <p className="main-form__validation-info">Input cannot be empty!</p>
  ) : null;

  return (
    <form className="main-form" onSubmit={handleOnSubmit}>
      <input
        value={value}
        onChange={handleOnChange}
        className="main-form__input"
        type="text"
        placeholder="Add your todo"
      />
      <input type="submit" className="main-form__submit" value="Add" />
      {optionalValidationErrorMessage}
    </form>
  );
};

export default Form;
