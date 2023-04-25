import { NavLink } from "react-router-dom";
import "./videojuegos.css";
import MK_1992 from "./MK_(1992).jpg";
import MKII from "./MKII.jpg";
import MK3 from './MK3.jpg';
import MK4 from './MK4.jpg';
import MKDA from './MKDA.jpg';
import MKD from './MKD.jpg';
import MKA from './MKA.png';
import MKvsDCU from './MKvsDCU.png';
import MK_2011 from './MK_(2011).png';
import MKX from './MKX.png';
import MK11 from './MK11.png';


function Videojuegos() {
  return (
    <div className="divPrincipalVideojuegos">
      
      <NavLink to="/videojuegos/MK_1992" className="Games"><a href='' className="MK_1992"><img className="MK_1992" src={MK_1992}></img></a></NavLink>

      <NavLink to="/videojuegos/MKII" className="Games"><a href='' className="MKII"><img className="MKII" src={MKII}></img></a></NavLink>

      <NavLink to="/videojuegos/MK3" className="Games"><a href='' className="MK3"><img className="MK3" src={MK3}></img></a></NavLink>

      <NavLink to="/videojuegos/MK4" className="Games"><a href='' className="MK4"><img className="MK4" src={MK4}></img></a></NavLink>
      <br></br>
      <br></br>

      <NavLink to="/videojuegos/MKDA" className="Games"><a href='' className="MKDA"><img className="MKDA" src={MKDA}></img></a></NavLink>

      <NavLink to="/videojuegos/MKD" className="Games"><a href='' className="MKD"><img className="MKD" src={MKD}></img></a></NavLink>

      <NavLink to="/videojuegos/MKA" className="Games"><a href='' className="MKA"><img className="MKA" src={MKA}></img></a></NavLink>

      <NavLink to="/videojuegos/MKvsDCU" className="Games"><a href='' className="MKvsDCU"><img className="MKvsDCU" src={MKvsDCU}></img></a></NavLink>
      <br></br>
      <br></br>

      <NavLink to="/videojuegos/MK_2011" className="Games"><a href='' className="MK_2011"><img className="MK_2011" src={MK_2011}></img></a></NavLink>

      <NavLink to="/videojuegos/MKX" className="Games"><a href='' className="MKX"><img className="MKX" src={MKX}></img></a></NavLink>

      <NavLink to="/videojuegos/MK11" className="Games"><a href='' className="MK11"><img className="MK11" src={MK11}></img></a></NavLink>
    </div>
  )
}

export default Videojuegos;