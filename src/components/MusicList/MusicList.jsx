import { useContext, useEffect } from "react";
import {
  StoreContext,
  albumsPerPageGrid,
  albumsPerPageColumn,
} from "../../store/StoreProvider";
import GridSongEl from "../SongEl/GridSongEl";
import ColumnSongEl from "../SongEl/ColumnSongEl";
import Translate from "../../text/Translate";
import { sortedPlaylist } from "./sortedPlaylist";

const MusicList = () => {
  const {
    playlist,
    setPlaylist,
    id,
    setId,
    sort,
    activePage,
    setActivePage,
    lookSystem,
  } = useContext(StoreContext);

  useEffect(() => {
    const retrievedObject = localStorage.getItem("favObject");
    const retrievedId = localStorage.getItem("id");
    if (retrievedObject) {
      const data = JSON.parse(retrievedObject);
      setPlaylist(data);
    }
    if (retrievedId) {
      const data = JSON.parse(retrievedId);
      setId(data);
    }
  }, []);
  useEffect(() => {
    const favObject = playlist;
    const currentId = id;

    localStorage.setItem("favObject", JSON.stringify(favObject));
    localStorage.setItem("id", JSON.stringify(currentId));
  }, [playlist]);

  const emptyPlaylist = (
    <div className="my-5">
      <p className="text-center">{Translate().album.empty}</p>
    </div>
  );

  const kindOfView = (items) => {
    if (lookSystem === "grid") {
      return <div className="row">{<GridSongEl itemToShow={items} />}</div>;
    } else if (lookSystem === "column") {
      return (
        <div className="table-responsive table-striped table-hover">
          <table className="table table-striped table-hover ">
            <ColumnSongEl itemToShow={items} />
          </table>
        </div>
      );
    }
  };

  const elementsToShow = () => {
    sortedPlaylist(playlist, sort);
    const whatView =
      lookSystem === "grid" ? albumsPerPageGrid : albumsPerPageColumn;
    if (playlist.length < whatView) {
      return kindOfView(playlist);
    } else if (playlist.length >= whatView) {
      const smallArray = playlist.filter((i, index) => {
        if (
          index >= whatView * (activePage - 1) &&
          index < whatView * activePage
        ) {
          return i;
        }
      });
      if (playlist.length === whatView * (activePage - 1)) {
        setActivePage(activePage - 1);
      }
      return kindOfView(smallArray);
    }
  };

  return (
    <div>
      {playlist.length === 0 && emptyPlaylist}
      {playlist.length > 0 && (
        <div>
          <div>{elementsToShow()}</div>
        </div>
      )}
    </div>
  );
};

export default MusicList;
