import { useContext } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Buttons from "../MusicList/Buttons";
import music from "../../images/music.png";
import best from "../../images/best.png";

const GridSongEl = () => {
    const {playlist} = useContext(StoreContext)
    return (playlist.length > 0 &&
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
                  <Buttons isFav={false} id={id} />
                  <Buttons isFav={true} id={id} />
                </div>
              </div>
            </div>
          );
        }))
}
 
export default GridSongEl;