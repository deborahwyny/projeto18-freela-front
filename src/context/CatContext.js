import React, { createContext, useContext, useState } from 'react';

const CatContext = createContext();

export const CatProvider = ({ children }) => {
  const [catData, setCatData] = useState([]);

  return (
    <CatContext.Provider value={{ catData, setCatData }}>
      {children}
    </CatContext.Provider>
  );
};

export const useCatContext = () => {
  return useContext(CatContext);
};
