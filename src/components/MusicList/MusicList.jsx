import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import music from "../../images/music.png";
import best from "../../images/best.png";
import Buttons from "./Buttons";

const MusicList = () => {
  const { playlist, setPlaylist, sort } = useContext(StoreContext);
  const [lookSystem, setLookSystem] = useState("grid");
  const emptyPlaylist = (
    <div className="my-5">
      <p className="text-center">Lista ulubionych jest pusta</p>
    </div>
  );

  //   const handleRemove = (id) => {
  //     const searchedItem = playlist.findIndex((item) => item.id === id);
  //     if (searchedItem !== -1) {
  //       const newArray = [...playlist];
  //       newArray.splice(searchedItem, 1);
  //       setPlaylist(newArray);
  //     }
  //   };
  //   const handleAddToFav = (id) => {
  //     console.log(playlist);
  //     const searchedItem = playlist.find((song) => song.id === id);
  //     const searchedItemIndex = playlist.findIndex((song) => song.id === id);
  //     searchedItem.fav = !searchedItem.fav;
  //     const newArray = [...playlist];
  //     newArray.splice(searchedItemIndex, 1, searchedItem);
  //     setPlaylist(newArray);
  //   };

  const sortedPlaylist = () => {
    const newPlaylist = playlist;
    if (sort === "az") {
      newPlaylist.sort((a, b) =>
        a.title > b.title ? 1 : b.songName > a.songName ? -1 : 0
      );
      setPlaylist(newPlaylist);
    } else if (sort === "za") {
      newPlaylist.sort((a, b) =>
        a.title < b.title ? 1 : b.songName < a.songName ? -1 : 0
      );
    } else if (sort === "idUp") {
      newPlaylist.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    } else if (sort === "idDown") {
      newPlaylist.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
    } else if (sort === "addUp") {
      newPlaylist.sort(function (a, b) {
        var c = new Date(a.addedDate);
        var d = new Date(b.addedDate);
        return d - c;
      });
    } else {
      newPlaylist.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
    }
    return newPlaylist;
  };

  const gridSongs =
    playlist.length > 0 &&
    playlist.map((song) => {
      const { id, author, songName, addedDate, fav } = song;

      return (
        <div className="col-md-4 card">
          <div className="mx-auto">
            <img
              src={music}
              class="card-img-top"
              style={{ height: "100px", width: "100px" }}
              alt="..."
            />
            {fav && <img src={best} style={{ position: "absolute" }} alt="" />}
          </div>
          <div class="card-body d-flex flex-column">
            <p
              class="card-title text-center font-weight-bold"
              style={{ wordWrap: "break-word" }}
            >
              <strong>{songName}</strong>
            </p>
            <p
              class="card-title text-center flex-grow-1"
              style={{ wordWrap: "break-word" }}
            >
              {author}
            </p>
            <small class="card-text text-muted">
              Data dodania - {addedDate}
            </small>{" "}
            <br />
            <small class="card-text text-muted">Id {id}</small>
            <div className="row justify-content-around m-2">
              {/* <button
                onClick={() => handleAddToFav(id)}
                data-value={id}
                className="btn btn-white col-4 d-flex justify-content-center "
              >
                <i className="fa fa-heart"></i>
              </button> */}
              {/* <button
                data-value={id}
                onClick={() => handleRemove(id)}
                className="btn btn-white col-4 d-flex justify-content-center"
              >
                <i className="fa fa-minus-square"></i>
              </button> */}
              <Buttons isFav={false} id={id} />
              <Buttons isFav={true} id={id} />
            </div>
          </div>
        </div>
      );
    });

  const tableThead = (
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">#</th>
        <th scope="col">Song</th>
        <th scope="col">Date</th>
        <th>id</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );

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
              {/* <button
                onClick={() => handleAddToFav(id)}
                data-value={id}
                className="btn btn-white col-4 d-flex justify-content-center "
              >
                <i className="fa fa-heart"></i>
              </button>
              <button
                data-value={id}
                onClick={() => handleRemove(id)}
                className="btn btn-white col-4 d-flex justify-content-center"
              >
                <i className="fa fa-minus-square"></i>
              </button> */}
              <Buttons isFav={false} id={id} />
              <Buttons isFav={true} id={id} />
            </div>
          </td>
        </tr>
      );
    });

  const elementsToShow = () => {
    sortedPlaylist();
    if (lookSystem === "grid") {
      return <div className="row">{gridSongs}</div>;
    } else if (lookSystem === "column") {
      return (
        <table class="table table-responsive-xl table-striped table-hover ">
          {tableThead}
          <tbody>{columnSongs}</tbody>
        </table>
      );
    }
  };

  return (
    <>
      {playlist.length === 0 && emptyPlaylist}
      {playlist.length > 0 && (
        <div>
          <div className="d-flex justify-content-end my-1">
            <button
              className="btn btn-white mx-3 border"
              onClick={() => {
                setLookSystem("grid");
              }}
            >
              <i class="fa fa-th"></i>
            </button>
            <button
              className="btn btn-white mx-3 border"
              onClick={() => {
                setLookSystem("column");
              }}
            >
              <i class="fa fa-bars"></i>
            </button>
          </div>
          <div>{elementsToShow()}</div>
        </div>
      )}
    </>
  );
};

export default MusicList;
