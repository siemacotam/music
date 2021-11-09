import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [id, setId] = useState(1);
  const [sort, setSort] = useState("");

  return (
    <StoreContext.Provider
      value={{
        playlist,
        setPlaylist,
        id,
        setId,
        sort,
        setSort,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
