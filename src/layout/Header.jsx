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
          style={{ height: "35px", width: "35px" }}
          className={
            language === "pl"
              ? "btn btn-white p-0 mx-1 border bg-info"
              : "btn btn-white p-0 mx-1 border bg-white"
          }
          onClick={() => {
            setLanguage("pl");
          }}
        >
          PL
        </button>
        <button
          style={{ height: "35px", width: "35px" }}
          className={
            language === "eng"
              ? "btn btn-white p-0 mx-1 border bg-info"
              : "btn btn-white p-0 mx-1 border bg-white"
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
          style={{ height: "35px", width: "35px" }}
          className={
            lookSystem === "grid"
              ? "btn btn-white p-0 mx-1 border bg-info"
              : "btn btn-white p-0 mx-1 border bg-white"
          }
          onClick={() => {
            setLookSystem("grid");
          }}
        >
          <i className="fa fa-th"></i>
        </button>
        <button
          style={{ height: "35px", width: "35px" }}
          className={
            lookSystem === "column"
              ? "btn btn-white p-0 mx-1 border bg-info"
              : "btn btn-white p-0 mx-1 border bg-white"
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
          <div className="mx-2">
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
