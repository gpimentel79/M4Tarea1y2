import React from "react";
import {Link} from "react-router-dom";  
import '../../styles/components/layout/Nav.css'
const Nav= (props)=> {
    return(
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Inicio</Link> </li>
                    <li><Link to="/nosotros">Nosotros</Link> </li>
                    <li><Link to="/novedades">Novedades</Link> </li>
                    <li><Link to="/contactos">Contacto</Link> </li>
                    
                </ul>
            </div>
        </nav>
    );
}
export default Nav;