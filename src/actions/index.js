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

export const edit = (payload) => {
  return {
    type: 'EDIT',
    payload,
  };
};

export const enable = (payload) => {
  return {
    type: 'ENABLE_EDIT',
    payload,
  };
};

export const disable = () => {
  return {
    type: 'DISABLE_EDIT',
  };
};
