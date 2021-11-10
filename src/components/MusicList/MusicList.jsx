import { useContext, useState } from "react";
import {
  StoreContext,
  albumsPerPageGrid,
  albumsPerPageColumn,
} from "../../store/StoreProvider";
import GridSongEl from "../SongEl/GridSongEl";
import ColumnSongEl from "../SongEl/ColumnSongEl";
import Pagination from "../Pagination/Pagination";

const MusicList = () => {
  const { playlist, sort, activePage, lookSystem, setLookSystem } =
    useContext(StoreContext);
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
          <table class="table table-striped table-hover ">
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

  const viewPanel = (
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
  );

  return (
    <div>
      {playlist.length === 0 && emptyPlaylist}
      {playlist.length > 0 && (
        <div>
          {viewPanel}
          <div>{elementsToShow()}</div>
          {<Pagination />}
        </div>
      )}
    </div>
  );
};

export default MusicList;
