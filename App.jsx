import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Search from './Search';
import MKHeader from "./Header.jpg";
import Nav from "./Nav";
import Home from "./Home";
import Peliculas from "./Peliculas";
import Videojuegos from "./Videojuegos";
import { Store } from "./Store";
import Footer from "./Footer";
import NotFound from './NotFound';
import MK_1995 from './MK_1995';
import MK_1997 from './MK_1997';
import MK_2021 from './MK_2021';
import MK_1992 from './MK_1992';
import MKII from './MKII';
import MK3 from './MK3';
import MK4 from './MK4';
import MKDA from './MKDA';
import MKD from './MKD';
import MKA from './MKA';
import MKvsDCU from './MKvsDCU';
import MK_2011 from './MK_2011';
import MKX from './MKX';
import MK11 from './MK11';
import { Carrito } from './Carrito';
import { CarritoProvider } from "./CarritoContext";
import Gracias_Por_Comprar from './Gracias_Por_Comprar';
import Videos from './Videos';

import "./App.css";

function App() {

  return (
    <CarritoProvider>
    <Router>
      <div className="App">
        
        <NavLink to="/" className="Header"><a href='/' className="Header"><img className="Header" src={MKHeader}></img></a></NavLink>
        <Nav/>
        <Search />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/peliculas" element={<Peliculas />} />
          <Route path="/videojuegos" element={<Videojuegos />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<NotFound/>} />

          <Route path="/peliculas/MK_1995" element={<MK_1995/>} />
          <Route path="/peliculas/MK_1997" element={<MK_1997/>} />
          <Route path="/peliculas/MK_2021" element={<MK_2021/>} />
          <Route path="/videojuegos/MK_1992" element={<MK_1992/>} />
          <Route path="/videojuegos/MKII" element={<MKII/>} />
          <Route path="/videojuegos/MK3" element={<MK3/>} />
          <Route path="/videojuegos/MK4" element={<MK4/>} />
          <Route path="/videojuegos/MKDA" element={<MKDA/>} />
          <Route path="/videojuegos/MKD" element={<MKD/>} />
          <Route path="/videojuegos/MKA" element={<MKA/>} />
          <Route path="/videojuegos/MKvsDCU" element={<MKvsDCU/>} />
          <Route path="/videojuegos/MK_2011" element={<MK_2011/>} />
          <Route path="/videojuegos/MKX" element={<MKX/>} />
          <Route path="/videojuegos/MK11" element={<MK11/>} />
          <Route path="/store/carrito" element={<Carrito />} />
          <Route path="/store/carrito/gracias" element={<Gracias_Por_Comprar />} />
        </Routes>

        <Videos/>
        <Footer/>
        
      </div>
    </Router>
    </CarritoProvider>
  );
}

export default App;
