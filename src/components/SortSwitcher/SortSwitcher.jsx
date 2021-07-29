import React from 'react';

import './SortSwitcher.scss';

const SortSwitcher = ({ sortByNewest, handleOnChange }) => {
  return (
    <div className="sort-switcher">
      <span className="sort-switcher__info">Sort by</span>
      <button onClick={handleOnChange} className="sort-switcher__btn">
        {sortByNewest ? 'newest' : 'date'}
      </button>
    </div>
  );
};

export default SortSwitcher;
