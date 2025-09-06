import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">

                {/* Coloana 1 - Logo și descriere */}
                <div className="footer-column">
                    <img src={logo} alt="Logo DejTrans" className="footer-logo"/>
                    <p className="footer-description">
                        Cirlioru Ionut PFA este o companie cu peste 12 ani de experiență în cadastru și intabulări.
                        Oferim servicii de calitate în Vrancea, atât în mediul urban cât și în rural
                    </p>
                </div>

                {/* Coloana 2 - Harta site-ului */}
                <div className="footer-column">
                    <h4>Harta site-ului</h4>
                    <ul className="footer-links">
                        <li><NavLink to="/">Acasă</NavLink></li>
                        <li><NavLink to="/despre">Despre noi</NavLink></li>
                        <li><NavLink to="/servicii">Servicii</NavLink></li>
                        <li><NavLink to="/galerie">Galerie</NavLink></li>
                        <li><NavLink to="/oferta">Ofertă</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>

                {/* Coloana 3 - Contact */}
                <div className="footer-column">
                    <h4>Contact</h4>
                    <p>📍 Strada Timotei Cipariu 4,<br/>Focșani 620004, România</p>
                    <p>📞 <a href="tel:+40737553140">+40 737 553 140</a></p>
                    <p>✉️ <a href="mailto:andreidobrin12@gmail.com">andreidobrin12@gmail.com</a></p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cirlioru Ionut PFA. Toate drepturile rezervate.</p>
                <div className="social-icons">
                    <a
                        href="https://www.facebook.com/profile.php?id=100064175078737&locale=ro_RO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook-icon"
                        aria-label="Facebook"
                    >
                        <FaFacebookF/>
                    </a>
                    <a
                        href="https://wa.me/40737553140"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whatsapp-icon"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp/>
                    </a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
