import { useContext } from "react";
import AddMusicPanel from "../components/AddMusicPanel/AddMusicPanel";
import MusicList from "../components/MusicList/MusicList";
import Pagination from "../components/Pagination/Pagination";
import SortPanel from "../components/SortPanel/SortPanel";
import { StoreContext } from "../store/StoreProvider";

const Main = () => {
  const { playlist } = useContext(StoreContext);
  return (
    <main className="container flex-grow-1 row justify-content-around mx-auto">
      <aside className="col-lg-3 p-0">
        <AddMusicPanel />
        <SortPanel />
      </aside>
      <section className="col-lg-8 px-4 songs-panel p-2 mb-3 position-relative">
        {playlist.length > 0 && <Pagination />}
        <MusicList />
      </section>
    </main>
  );
};

export default Main;
