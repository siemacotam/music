import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import music from "../../images/music.png";

const MusicList = () => {
  const [lookSystem, setLookSystem] = useState("grid");
  const { playlist } = useContext(StoreContext);
  const emptyPlaylist = (
    <div className="my-5">
      <p className="text-center">Lista ulubionych jest pusta</p>
    </div>
  );

  const buttonsPanel = (
    <div className="row justify-content-around m-2">
      <button className="btn btn-white col-4 d-flex justify-content-center ">
        <i className="fa fa-heart"></i>
      </button>
      <button className="btn btn-white col-4 d-flex justify-content-center">
        <i className="fa fa-minus-square"></i>
      </button>
    </div>
  );

  const gridSongs =
    playlist.length > 0 &&
    playlist.map((song) => {
      const { id, author, songName, addedDate, fav } = song;

      return (
        <div className="col-md-4 card">
          <img
            src={music}
            class="card-img-top mx-auto"
            style={{ height: "100px", width: "100px" }}
            alt="..."
          />
          <div class="card-body d-flex flex-column">
            <p
              class="card-title text-center font-weight-bold"
              style={{ wordWrap: "break-word" }}
            >
              {songName}
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
            {buttonsPanel}
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
        <th scope="col"></th>
      </tr>
    </thead>
  );

  const columnSongs =
    playlist.length > 0 &&
    playlist.map((song) => {
      const { id, author, songName, addedDate, fav } = song;
      return (
        <tr>
          <th>
            <img src={music} alt="" style={{ height: "50px", width: "50px" }} />
          </th>
          <th scope="row">{id}</th>
          <td>
            <div className="d-flex flex-column">
              <p>{songName}</p>
              <p>{author}</p>
            </div>
          </td>
          <td>{addedDate}</td>
          <td>{buttonsPanel}</td>
        </tr>
      );
    });

  const elementsToShow = () => {
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
