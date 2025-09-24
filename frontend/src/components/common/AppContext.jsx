import React, { createContext, useState } from 'react';

// Buat context
export const UserContext = createContext();

// Buat provider
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); // data username/email

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
