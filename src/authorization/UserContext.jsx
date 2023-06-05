import React, { createContext, useState } from "react";

export const UserContext = React.createContext();

export function UserProvider({ children }) {
  const [Username, setUsername] = useState(null);
  const [Id, setId] = useState(null);
  return (
    <UserContext.Provider value={{ Username, setUsername, Id, setId }}>
      {children}
    </UserContext.Provider>
  );
}
