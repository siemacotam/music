import { useContext, useEffect, useState } from "react";
import {
  albumsPerPageColumn,
  albumsPerPageGrid,
  StoreContext,
} from "../../store/StoreProvider";
import Translate from "../../text/Translate";
import { numbOfPages } from "./paginationEl";

const Pagination = () => {
  const [numberOfPages, setNumberOfPages] = useState(1);

  const { playlist, activePage, setActivePage, lookSystem } =
    useContext(StoreContext);

  const whatView =
    lookSystem === "grid" ? albumsPerPageGrid : albumsPerPageColumn;

  const howManyPages = Math.ceil(playlist.length / whatView);

  useEffect(() => {
    setNumberOfPages(howManyPages);
  }, [playlist]);
  useEffect(() => {
    setNumberOfPages(howManyPages);
    setActivePage(1);
  }, [lookSystem]);

  const prevButton = (
    <li className="page-item">
      <button
        className="page-link"
        disabled={activePage === 1}
        onClick={() => {
          setActivePage((prev) => prev - 1);
        }}
      >
        <i class="fa fa-chevron-left"></i>
      </button>
    </li>
  );

  const nextButton = (
    <li className="page-item">
      <button
        className="page-link"
        disabled={activePage === howManyPages || howManyPages === 0}
        onClick={() => {
          setActivePage((prev) => prev + 1);
        }}
      >
        <i class="fa fa-chevron-right"></i>
      </button>
    </li>
  );

  return (
    <nav className="d-flex justify-content-end">
      <ul className="pagination">
        {prevButton}
        {numbOfPages(playlist, howManyPages, activePage, setActivePage)}
        {nextButton}
      </ul>
    </nav>
  );
};

export default Pagination;
