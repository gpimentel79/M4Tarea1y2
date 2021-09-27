import { faFacebook,faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt,faEnvelopeOpen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import '../styles/components/pages/ContactoPage.css';



const ContactoPage = (props) => {
    return (
    <main className="holder">
        <div className="columna contacto">
            <h2>Complete el formulario</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label>Nombre </label>
                    <input type="text" name="nombre"/>
                </p>
                <p>
                    <label>E-mail</label>
                    <input type="text" name="email"/>
                </p>
              
                <p>
                    <label>Teléfono</label>
                   <input type="text" name="telefono"/>
                </p>
                <p>
                    <label>Comentario</label>
                    <textarea name="mensaje"></textarea> 
                </p>
                <p className="centrar">
                    <input type="submit" value="Enviar"/> 

                </p>
            </form>
        </div>
        <div className="columna datos">
            <h2>Otras vías de contactos</h2>
            <p>Tambien pueden contactarse con nosotros usando los siguientes medios:</p>
            

            <ul>
                <li><FontAwesomeIcon icon={faPhoneAlt}/> Teléfono:454546464   </li>
                <li><FontAwesomeIcon icon={faEnvelopeOpen}/> Email:pepe@aref.gob.ar</li>
                <li><FontAwesomeIcon icon={faFacebook}/> Facebook</li>
                <li><FontAwesomeIcon icon={faTwitterSquare}/> Twitter</li>
            </ul>
                    
        </div>
    </main>
     
    );
}

export default ContactoPage;