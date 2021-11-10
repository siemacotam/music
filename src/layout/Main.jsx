import { useContext } from "react";
import AddMusicPanel from "../components/AddMusicPanel/AddMusicPanel";
import MusicList from "../components/MusicList/MusicList";
import Pagination from "../components/Pagination/Pagination";
import SortPanel from "../components/SortPanel/SortPanel";
import { StoreContext } from "../store/StoreProvider";

const Main = () => {
  const { playlist } = useContext(StoreContext);
  return (
    <main className="container row justify-content-around mx-auto">
      <div className="col-lg-3 p-0">
        <AddMusicPanel />
        <SortPanel />
      </div>
      <div className="col-lg-8 px-4 songs-panel p-2 position-relative">
        {playlist.length > 0 && <Pagination />}
        <MusicList />
      </div>
    </main>
  );
};

export default Main;
