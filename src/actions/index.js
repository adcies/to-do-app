export const add = (payload) => {
  return {
    type: 'ADD',
    payload,
  };
};

export const remove = (payload) => {
  return {
    type: 'DELETE',
    payload,
  };
};

export const edit = () => {
  return {
    type: 'EDIT',
  };
};
