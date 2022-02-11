import {NavLink} from "react-router-dom";
import '../Styles/navBar.css';



function Navbar(){
    return (
 
        <div>
            <nav>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="bar-btn">
            <i className="fas fa-bars"></i>
            </label>
            <ul className="nav-menu">
                <li className="active">
                    <NavLink to="/">Inicio</NavLink> 
                </li>
            
                <li>
                    <NavLink to="/Carrito">Carrito</NavLink>
                </li>
            </ul>
            </nav> 
        </div>
    )
}

export {Navbar} 