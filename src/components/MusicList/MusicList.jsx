import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import GridSongEl from "../SongEl/GridSongEl";
import ColumnSongEl from "../SongEl/ColumnSongEl";

const MusicList = () => {
  const { playlist, sort } = useContext(StoreContext);
  const [lookSystem, setLookSystem] = useState("grid");
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

  const elementsToShow = () => {
    sortedPlaylist();
    if (lookSystem === "grid") {
      return <div className="row">{<GridSongEl />}</div>;
    } else if (lookSystem === "column") {
      return (
        <table class="table table-responsive-xl table-striped table-hover ">
          <ColumnSongEl />
        </table>
      );
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
    <>
      {playlist.length === 0 && emptyPlaylist}
      {playlist.length > 0 && (
        <div>
          {viewPanel}
          <div>{elementsToShow()}</div>
        </div>
      )}
    </>
  );
};

export default MusicList;
