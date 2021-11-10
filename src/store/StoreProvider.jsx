import React, { createContext, useState } from "react";

export const StoreContext = createContext(null);

export const albumsPerPage = 6;
export const albumsPerPageGrid = 6;
export const albumsPerPageColumn = 10;

const StoreProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [id, setId] = useState(1);
  const [sort, setSort] = useState("");
  const [activePage, setActivePage] = useState(1);
  const [lookSystem, setLookSystem] = useState("grid");

  return (
    <StoreContext.Provider
      value={{
        playlist,
        setPlaylist,
        id,
        setId,
        sort,
        setSort,
        activePage,
        setActivePage,
        lookSystem,
        setLookSystem,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
