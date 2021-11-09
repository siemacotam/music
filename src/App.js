import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AddMusicPanel from './components/AddMusicPanel/AddMusicPanel';
import MusicList from './components/MusicList/MusicList';
import SortPanel from './components/SortPanel/SortPanel';
import './sass/style.sass'
import nuta from './images/nuta.png'
import StoreProvider from './store/StoreProvider';

function App() {
  return (
    <StoreProvider>
    <div className="App h-100 w-100">
      <div className="container">
        <div className="bg"></div>
        <div className='d-flex align-items-center mb-4 border-bottom border-dark'>
          <img src={nuta} style={{height: '40px'}} alt="" />
          <h1 className="display-3 text-center pb-4 flex-grow-1">FavMusicList</h1>
          <img src={nuta}  style={{height: '40px'}} alt="" />
        </div>
        <div className="container row justify-content-around mx-auto">
            <div className="col-lg-3 p-0">
              <AddMusicPanel />
              <SortPanel />
            </div>
            <div className="col-lg-8 bg-white songs-panel"><MusicList /></div>
        </div>
      </div>
    </div>
    </StoreProvider>
  );
}

export default App;
