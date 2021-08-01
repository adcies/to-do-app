import React from 'react';

import { Link } from 'react-router-dom';

import './ErrorPage.scss';

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h2 className="error-page__info">Oops... Page not found!</h2>
      <div className="error-page__redirect-info">
        Go back to Home page{' '}
        <Link to="/" className="error-page__redirect-link">
          here
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
