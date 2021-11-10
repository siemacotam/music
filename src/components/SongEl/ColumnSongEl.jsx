import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Buttons from "../MusicList/Buttons";
import best from "../../images/best.png";

const ColumnSongEl = ({ itemToShow }) => {
  const { playlist } = useContext(StoreContext);
  const theads = [
    { name: "" },
    { name: "#" },
    { name: "Album" },
    { name: "Data" },
    { name: "ID" },
    { name: "" },
  ];

  const tableThead = () => {
    const thEl = theads.map((item) => {
      return <th scope="col">{item.name}</th>;
    });

    return (
      <thead>
        <tr>{thEl}</tr>
      </thead>
    );
  };

  const columnSongs =
    itemToShow.length > 0 &&
    itemToShow.map((song) => {
      const { id, author, songName, addedDate, fav } = song;
      const itemIndex = playlist.findIndex((song) => song.id === id);
      return (
        <tr>
          <th>
            {fav && (
              <img
                src={best}
                style={{ height: "30px", width: "30px" }}
                alt=""
              />
            )}
          </th>
          <th scope="row">{itemIndex + 1}</th>
          <td>
            <div className="d-flex flex-column">
              <p className="song-title m-0">
                <strong>{songName}</strong>
              </p>
              <p className="m-0">{author}</p>
            </div>
          </td>
          <td>{addedDate.substring(0, addedDate.indexOf(","))}</td>
          <td>{id}</td>
          <td>
            <div className="row justify-content-around m-2">
              <Buttons isFav={false} id={id} fav={fav} />
              <Buttons isFav={true} id={id} fav={fav} />
            </div>
          </td>
        </tr>
      );
    });

  return (
    <>
      {tableThead()}
      {columnSongs}
    </>
  );
};

export default ColumnSongEl;
