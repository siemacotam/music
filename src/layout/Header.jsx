import { useContext } from "react";
import nuta from "../images/nuta.png";
import { StoreContext } from "../store/StoreProvider";

const Header = () => {
  const { setLookSystem, setLanguage, language, lookSystem } =
    useContext(StoreContext);

  const btnStyles = (info) => {
    if (language === info || lookSystem === info) {
      return "btn btn-white p-0 m-1 bg-info";
    } else {
      return "btn btn-white p-0 m-1 bg-white";
    }
  };

  const languageBtnsPanel = (
    <div>
      <button
        style={{ height: "30px", width: "30px" }}
        className={btnStyles("pl")}
        onClick={() => {
          setLanguage("pl");
        }}
      >
        PL
      </button>
      <button
        style={{ height: "30px", width: "30px" }}
        className={btnStyles("eng")}
        onClick={() => {
          setLanguage("eng");
        }}
      >
        EN
      </button>
    </div>
  );

  const albumsViewPanel = (
    <div>
      <button
        style={{ height: "30px", width: "30px" }}
        className={btnStyles("grid")}
        onClick={() => {
          setLookSystem("grid");
        }}
      >
        <i className="fa fa-th"></i>
      </button>
      <button
        style={{ height: "30px", width: "30px" }}
        className={btnStyles("column")}
        onClick={() => {
          setLookSystem("column");
        }}
      >
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );

  const buttonsPanel = (
    <div className="d-flex flex-column justify-content-end mb-1">
      {languageBtnsPanel}
      {albumsViewPanel}
    </div>
  );
  return (
    <header>
      <div className="border-bottom border-white mb-3 header-bg-color">
        <div className="container d-flex justify-content-between align-items-center pt-2">
          <div className="d-flex align-items-center">
            <div>
              <img src={nuta} style={{ height: "40px" }} alt="" />
            </div>
            <h1 className="text-center ">Music App</h1>
          </div>
          <div>{buttonsPanel}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
