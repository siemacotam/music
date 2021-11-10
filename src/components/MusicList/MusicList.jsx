import { useContext, useEffect } from "react";
import {
  StoreContext,
  albumsPerPageGrid,
  albumsPerPageColumn,
} from "../../store/StoreProvider";
import GridSongEl from "../SongEl/GridSongEl";
import ColumnSongEl from "../SongEl/ColumnSongEl";
import Pagination from "../Pagination/Pagination";

const MusicList = () => {
  const {
    playlist,
    setPlaylist,
    id,
    setId,
    sort,
    activePage,
    lookSystem,
    setLookSystem,
  } = useContext(StoreContext);

  useEffect(() => {
    var retrievedObject = localStorage.getItem("testObject");
    var retrievedId = localStorage.getItem("id");
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
    var testObject = playlist;
    var currentId = id;

    localStorage.setItem("testObject", JSON.stringify(testObject));
    localStorage.setItem("id", JSON.stringify(currentId));
  }, [playlist]);

  const emptyPlaylist = (
    <div className="my-5">
      <p className="text-center">Lista ulubionych jest pusta</p>
    </div>
  );

  const sortedPlaylist = () => {
    const newPlaylist = playlist;
    if (sort === "az") {
      newPlaylist.sort((a, b) =>
        a.title > b.title ? 1 : b.songName > a.songName ? -1 : 0
      );
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
    sortedPlaylist();
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
      return kindOfView(smallArray);
    }
  };

  return (
    <div>
      {playlist.length === 0 && emptyPlaylist}
      {playlist.length > 0 && (
        <div>
          <div>{elementsToShow()}</div>
          {<Pagination />}
        </div>
      )}
    </div>
  );
};

export default MusicList;
