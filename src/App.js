
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './pages/Home';
import Kidwear from './pages/Kidwear';
import Support from './pages/Support';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About_us from './pages/About_us';
import CartPage from './pages/CartPage';
import Favorite from './pages/Favorite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/kidswear' element={<Kidwear/>}/>
        <Route path='/support' element={<Support/> }/>
        <Route path='/about_me' element={<About_us/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/favt' element={<Favorite/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
