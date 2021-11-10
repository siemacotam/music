import 'bootstrap/dist/css/bootstrap.css';
import './sass/style.sass'
import StoreProvider from './store/StoreProvider';
import Header from './layout/Header';
import Main from './layout/Main';

function App() {

  return (
    <StoreProvider>
    <div className="App h-100 w-100">
      <div className="container">
        <div className="bg"></div>
        <Header />
        <Main />
      </div>
    </div>
    </StoreProvider>
  );
}

export default App;
