const pageEl = (numb, activePage, setActivePage) => {
    return (
      <li
        className={"page-item " + (numb === activePage && "active")}
        onClick={() => {
          setActivePage(numb);
        }}
      >
        <button className="page-link">{numb}</button>
      </li>
    );
  };

  export const numbOfPages = (playlist, howManyPages, activePage, setActivePage) => {
    let pagesArray = [];
    if (playlist.length > 0) {
      for (let i = 0; i < howManyPages; i++) {
        pagesArray.push(pageEl(i + 1, activePage, setActivePage));
      }
    }
    return pagesArray.map((i) => i);
  };