import React from 'react';

import ToDoList from '../../components/ToDoList/ToDoList';

const CompleteList = () => {
  return (
    <>
      <ToDoList isFullList={true} />
    </>
  );
};

export default CompleteList;
