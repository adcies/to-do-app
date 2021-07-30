import React, { createContext, useState } from 'react';

export const ActiveButtonContext = createContext();

export const ActiveButtonProvider = ({ children }) => {
  const [active, setActive] = useState(true);
  return (
    <ActiveButtonContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveButtonContext.Provider>
  );
};
