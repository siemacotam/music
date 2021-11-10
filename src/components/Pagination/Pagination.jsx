import { useContext, useEffect, useState } from "react";
import {
  albumsPerPageColumn,
  albumsPerPageGrid,
  StoreContext,
} from "../../store/StoreProvider";
import Translate from "../../text/Translate";

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

  const pageEl = (numb) => {
    return (
      <li
        className={"page-item " + (numb === activePage && "active")}
        onClick={() => {
          setActivePage(numb);
        }}
      >
        <button to="/shop" className="page-link">
          {numb}
        </button>
      </li>
    );
  };

  const numbOfPages = () => {
    let pagesArray = [];
    if (playlist.length > 0) {
      for (let i = 0; i < howManyPages; i++) {
        pagesArray.push(pageEl(i + 1));
      }
    }
    return pagesArray.map((i) => i);
  };

  const prevButton = (
    <li className="page-item">
      <button
        className="page-link"
        disabled={activePage === 1}
        onClick={() => {
          setActivePage((prev) => prev - 1);
        }}
      >
        {Translate().pagination.prevBtn}
      </button>
    </li>
  );

  const nextButton = (
    <li className="page-item">
      <button
        className="page-link"
        disabled={activePage === howManyPages}
        onClick={() => {
          setActivePage((prev) => prev + 1);
        }}
      >
        {Translate().pagination.nextBtn}
      </button>
    </li>
  );

  return (
    <ul className="pagination">
      {prevButton}
      {numbOfPages()}
      {nextButton}
    </ul>
  );
};

export default Pagination;
