import nuta from "../images/nuta.png";

const Header = () => {
  return (
    <div className="d-flex align-items-center mb-4 border-bottom border-dark">
      <img src={nuta} style={{ height: "40px" }} alt="" />
      <h1 className="display-3 text-center pb-4 flex-grow-1">FavMusicList</h1>
      <img src={nuta} style={{ height: "40px" }} alt="" />
    </div>
  );
};

export default Header;
