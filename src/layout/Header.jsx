import { useContext } from "react";
import nuta from "../images/nuta.png";
import { StoreContext } from "../store/StoreProvider";

const Header = () => {
  const { setLookSystem, setLanguage, language, lookSystem } =
    useContext(StoreContext);

  const buttonsPanel = (
    <div className="d-flex flex-column justify-content-end m-1">
      <div>
        <button
          style={{ height: "42px", width: "42px" }}
          className={
            language === "pl"
              ? "btn btn-white mx-1 border bg-info"
              : "btn btn-white mx-1 border bg-white"
          }
          onClick={() => {
            setLanguage("pl");
          }}
        >
          PL
        </button>
        <button
          style={{ height: "42px", width: "42px" }}
          className={
            language === "eng"
              ? "btn btn-white mx-1 border bg-info"
              : "btn btn-white mx-1 border bg-white"
          }
          onClick={() => {
            setLanguage("eng");
          }}
        >
          EN
        </button>
      </div>
      <div>
        <button
          style={{ height: "42px", width: "42px" }}
          className={
            lookSystem === "grid"
              ? "btn btn-white mx-1 border bg-info"
              : "btn btn-white mx-1 border bg-white"
          }
          onClick={() => {
            setLookSystem("grid");
          }}
        >
          <i className="fa fa-th"></i>
        </button>
        <button
          style={{ height: "42px", width: "42px" }}
          className={
            lookSystem === "column"
              ? "btn btn-white mx-1 border bg-info"
              : "btn btn-white mx-1 border bg-white"
          }
          onClick={() => {
            setLookSystem("column");
          }}
        >
          <i className="fa fa-bars"></i>
        </button>
      </div>
    </div>
  );
  return (
    <header>
      <div className="d-flex justify-content-between align-items-center my-3 border-bottom border-dark">
        <div className="d-flex align-items-center">
          <div className="mx-3">
            <img src={nuta} style={{ height: "40px" }} alt="" />
          </div>
          <h1 className="display-3 text-center ">Music App</h1>
        </div>
        <div>{buttonsPanel}</div>
      </div>
    </header>
  );
};

export default Header;
