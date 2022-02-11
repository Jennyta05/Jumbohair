import {NavLink} from "react-router-dom";

function Navbar(){
    return (

        <div>
            <ul>
            
                <li>
                    <NavLink to="/">Inicio</NavLink> 
                </li>
            
                <li>
                    <NavLink to="/Carrito">Carrito</NavLink>
                </li>
                
            </ul>
        </div>
    )
}

export {Navbar} 