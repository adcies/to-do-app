import React from 'react';

import Form from '../Form/Form';

import './EditContainer.scss';

const EditContainer = () => {
  return (
    <div className="edit-container">
      <Form isEditForm={true} />
    </div>
  );
};

export default EditContainer;
