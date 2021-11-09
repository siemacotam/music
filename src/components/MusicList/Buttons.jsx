import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";

const Buttons = ({ isFav, id }) => {
  const { playlist, setPlaylist } = useContext(StoreContext);
  const buttonLabel = isFav ? (
    <i className="fa fa-heart"></i>
  ) : (
    <i className="fa fa-minus-square"></i>
  );

  const handleRemove = () => {
    const searchedItem = playlist.findIndex((item) => item.id === id);
    if (searchedItem !== -1) {
      const newArray = [...playlist];
      newArray.splice(searchedItem, 1);
      setPlaylist(newArray);
    }
  };
  const handleAddToFav = () => {
    const searchedItem = playlist.find((song) => song.id === id);
    const searchedItemIndex = playlist.findIndex((song) => song.id === id);
    searchedItem.fav = !searchedItem.fav;
    const newArray = [...playlist];
    newArray.splice(searchedItemIndex, 1, searchedItem);
    setPlaylist(newArray);
  };

  const whichFunction = isFav ? handleAddToFav : handleRemove;

  return (
    <button
      data-value={id}
      onClick={whichFunction}
      className="btn btn-white col-4 d-flex justify-content-center"
    >
      {buttonLabel}
    </button>
  );
};

export default Buttons;
