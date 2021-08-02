import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { disable } from '../../actions';

import Form from '../../components/Form/Form';
import ToDoList from '../../components/ToDoList/ToDoList';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(disable());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form />
      <ToDoList />
    </>
  );
};

export default Home;
