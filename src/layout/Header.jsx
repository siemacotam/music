import nuta from "../images/nuta.png";

const Header = () => {
  return (
    <div className="d-flex align-items-center my-3 pb-3 border-bottom border-dark">
      <img src={nuta} style={{ height: "40px" }} alt="" />
      <h1 className="display-3 text-center flex-grow-1">Music App</h1>
      <img src={nuta} style={{ height: "40px" }} alt="" />
    </div>
  );
};

export default Header;
