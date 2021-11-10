import { useContext } from "react";
import nuta from "../images/nuta.png";
import { StoreContext } from "../store/StoreProvider";

const Header = () => {
  const { setLookSystem, setLanguage } = useContext(StoreContext);

  const buttonsPanel = (
    <div className="d-flex justify-content-end m-1">
      <button
        className="btn btn-white mx-1 border bg-white"
        onClick={() => {
          setLanguage("pl");
        }}
      >
        PL
      </button>
      <button
        className="btn btn-white mx-1 border bg-white"
        onClick={() => {
          setLanguage("en");
        }}
      >
        EN
      </button>
      <button
        className="btn btn-white mx-1 border bg-white"
        onClick={() => {
          setLookSystem("grid");
        }}
      >
        <i className="fa fa-th"></i>
      </button>
      <button
        className="btn btn-white mx-1 border bg-white"
        onClick={() => {
          setLookSystem("column");
        }}
      >
        <i className="fa fa-bars"></i>
      </button>
    </div>
  );
  return (
    <header>
      <div className="d-flex align-items-center mt-3 pb-3 border-bottom border-dark">
        <img src={nuta} style={{ height: "40px" }} alt="" />
        <h1 className="display-3 text-center flex-grow-1">Music App</h1>
        <img src={nuta} style={{ height: "40px" }} alt="" />
      </div>
      <div>{buttonsPanel}</div>
    </header>
  );
};

export default Header;
