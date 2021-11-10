import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Buttons from "../MusicList/Buttons";
import best from "../../images/best.png";

const ColumnSongEl = () => {
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
    playlist.length > 0 &&
    playlist.map((song) => {
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
              <p>
                <strong>{songName}</strong>
              </p>
              <p>{author}</p>
            </div>
          </td>
          <td>{addedDate}</td>
          <td>{id}</td>
          <td>
            <div className="row justify-content-around m-2">
              <Buttons isFav={false} id={id} />
              <Buttons isFav={true} id={id} />
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
