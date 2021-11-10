import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AddMusicPanel from './components/AddMusicPanel/AddMusicPanel';
import MusicList from './components/MusicList/MusicList';
import SortPanel from './components/SortPanel/SortPanel';
import './sass/style.sass'
import StoreProvider from './store/StoreProvider';
import Header from './layout/Header';

function App() {

  return (
    <StoreProvider>
    <div className="App h-100 w-100">
      <div className="container">
        <div className="bg"></div>
        {<Header />}
        <div className="container row justify-content-around mx-auto">
            <div className="col-lg-3 p-0">
              <AddMusicPanel />
              <SortPanel />
            </div>
            <div className="col-lg-8 px-4 songs-panel p-2 position-relative"><MusicList /></div>
        </div>
      </div>
    </div>
    </StoreProvider>
  );
}

export default App;
