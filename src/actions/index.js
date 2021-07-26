export const add = (payload) => {
  return {
    type: 'ADD',
    payload,
  };
};

export const remove = () => {
  return {
    type: 'DELETE',
  };
};

export const edit = () => {
  return {
    type: 'EDIT',
  };
};
