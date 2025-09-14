import "./MapSection.css";
import React from "react";

export default function MapSection() {
    return (
        <div className="map-container">
            <iframe
                title="harta sediu social"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2700.101781344254!2d27.069996676489354!3d45.796574371079225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b43c16bd8f1469%3A0x50dfffa4fae1d77f!2sStrada%20Leopoldina%20B%C4%83l%C4%83nu%C8%9B%C4%83%2035%2C%20Jari%C8%99tea%20627180!5e0!3m2!1sro!2sro!4v1726249999999!5m2!1sro!2sro"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-overlay">
                <div className="contact-box">
                    <div className="contact-column">
                        <h3>SEDIU SOCIAL</h3>
                        <p>📍 Strada Leopoldina Bălănuță 35,<br />Jariștea 627180, România</p>
                        <p>
                            📞 <a href="tel:+40 762 917 664" className="contact-link">+40 762 917 664</a>
                        </p>
                        <p>
                            ✉️ <a href="mailto:andreidobrin12@gmail.com"
                                  className="contact-link">andreidobrin12@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
