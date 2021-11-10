import Buttons from "../MusicList/Buttons";
import music from "../../images/music.png";
import best from "../../images/best.png";
import Translate from "../../text/Translate";

const GridSongEl = ({ itemToShow }) => {
  return (
    itemToShow.length > 0 &&
    itemToShow.map((song) => {
      const { id, author, songName, addedDate, fav } = song;

      const addAndIdPanel = (
        <div className="">
          <p className="card-text text-muted m-0 text-center">
            {Translate().album.added}{" "}
            {addedDate.substring(0, addedDate.indexOf(","))}
          </p>

          <p className="card-text text-muted text-center">Id {id}</p>
        </div>
      );

      return (
        <div className="col-md-4 p-2" key={id}>
          <div
            className={fav ? "card bg-white border-success" : "card bg-white"}
          >
            <div className="mx-auto">
              <img
                src={music}
                className="card-img-top"
                style={{ height: "100px", width: "100px" }}
                alt="..."
              />
              {fav && (
                <img src={best} style={{ position: "absolute" }} alt="" />
              )}
            </div>
            <div className="card-body d-flex flex-column">
              <div className="mx-1 shadow p-3 mb-3 bg-white rounded">
                <p
                  className="card-title text-center font-weight-bold song-title text-big"
                  style={{ wordWrap: "break-word" }}
                >
                  <strong>{songName}</strong>
                </p>
                <p
                  className="card-title text-center flex-grow-1"
                  style={{ wordWrap: "break-word" }}
                >
                  {author}
                </p>
              </div>
              {addAndIdPanel}
              <div className="row justify-content-around m-2">
                <Buttons isFav={false} id={id} fav={fav} />
                <Buttons isFav={true} id={id} fav={fav} />
              </div>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default GridSongEl;
