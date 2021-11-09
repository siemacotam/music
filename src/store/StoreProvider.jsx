import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [id, setId] = useState(1);

  return (
    <StoreContext.Provider
      value={{
        playlist,
        setPlaylist,
        id,
        setId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
