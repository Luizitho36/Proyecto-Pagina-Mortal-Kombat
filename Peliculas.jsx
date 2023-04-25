import { NavLink } from "react-router-dom";
import "./peliculas.css";
import MK_1995 from "./MK_(1995).jpg";
import MK_1997 from './MK_(1997).jpg';
import MK_2021 from './MK_(2021).jpg';

function Peliculas() {
  return (
    <div className="divPrincipalPeliculas">
      
      <NavLink to="/peliculas/MK_1995" className="Movies"><a href='' className="MK_1995"><img className="MK_1995" src={MK_1995}></img></a></NavLink>

      <NavLink to="/peliculas/MK_1997" className="Movies"><a href='' className="MK_1997"><img className="MK_1997" src={MK_1997}></img></a></NavLink>

      <NavLink to="/peliculas/MK_2021" className="Movies"><a href='' className="MK_2021"><img className="MK_2021" src={MK_2021}></img></a></NavLink>
      <br></br>
      <br></br>
    </div>
  )
}

export default Peliculas