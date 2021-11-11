import 'bootstrap/dist/css/bootstrap.css';
import './sass/style.sass'
import StoreProvider from './store/StoreProvider';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {
return (
  <StoreProvider>
      <>
        <div className="bg"></div>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <Main />
          <Footer />
        </div>
      </>
  </StoreProvider>
);
}

export default App;
