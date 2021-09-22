import React from 'react';
import {Link} from 'react-router-dom'
import Legales from './Legales';
import MailIcon from '../img/correo-electronico.png'
import RelojIcon from '../img/reloj.png'
import TelIcon from '../img/llamada-telefonica.png'
import ubiIcon from '../img/marcador-de-posicion.png'
import WspIcon from '../img/whatsapp.png'

const Footer = () => {
    return (<>
                <footer>
                    <div id="boxFooter">
                        <div id="consultar" className="seccionFooter">
                            <a href="https://wa.me/564654654654">
                                    <img src={WspIcon} alt="Icono WhatsApp"/>
                                    <p>CONTACTARME</p>
                            </a>
                        </div>
                        <div id="subFooter"className="seccionFooter">
                            <div id="map" className="subSeccionFooter">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.6440089743937!2d-58.364057484998156!3d-34.613162380457105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334d7be5f24fb%3A0xfbce36b9eec9f207!2sMartha%20Salotti%20434%2C%20C1107CMA%20CABA!5e0!3m2!1ses-419!2sar!4v1632183913556!5m2!1ses-419!2sar" 
                                        width="400" 
                                        height="300" 
                                        style={{ border: 0 }} 
                                        allowfullscreen="" 
                                        loading="lazy"
                                ></iframe>
                            </div>
                            <div id="menuFooter"className="subSeccionFooter">
                                <ul id="listaMenuFooter">
                                    <li className="itemMenuFooter">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="itemMenuFooter">
                                        <Link to="/categories">Categorias</Link>
                                    </li>
                                    <li className="itemMenuFooter">
                                        <Link to="/faq">Preguntas frecuentes</Link>
                                    </li>
                                    <li className="itemMenuFooter">
                                        <Link to="/aboutus">Nosotros</Link>
                                    </li>
                                </ul>
                            </div>
                            <div id="contacto"className="subSeccionFooter">
                                <ul>    
                                    <li>
                                        <img src={MailIcon} alt="Icono correo electrónico" />
                                        <p><a href="mailto:hola@soulets.com">hola@soulets.com</a></p>
                                    </li>
                                    <li>
                                        <img src={RelojIcon} alt="Icono reloj" />
                                        <p>Lunes a Sábados / 9:00 - 18:00 hs</p>
                                    </li>
                                    <li>
                                        <img src={TelIcon} alt="Icono teléfono" />
                                        <p>(+54 911) 4554-7898</p>
                                    </li>
                                    <li>
                                        <img src={ubiIcon} alt="Icono ubicación" />
                                        <p>Martha Salotti 434, C1107CMA CABA</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <Legales />
            </>
    )
}

export default Footer
