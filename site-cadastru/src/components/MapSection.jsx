import "./MapSection.css";
import React from "react";

export default function MapSection() {
    return (
        <div className="map-container">
            <iframe
                title="harta sediu social"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2701.433768993045!2d27.176558076488124!3d45.69100322191892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b418bb64301091%3A0xa14f2c4b724cba93!2sStrada%20Timotei%20Cipariu%204%2C%20Foc%C8%99ani%20620004!5e0!3m2!1sro!2sro!4v1697299999999!5m2!1sro!2sro"
                width="100%"
                height="500"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-overlay">
                <div className="contact-box">
                    <div className="contact-column">
                        <h3>SEDIU SOCIAL</h3>
                        <p>📍 Strada Timotei Cipariu 4,<br/>Focșani 620004, România</p>
                        <p>
                            📞 <a href="tel:+40737553140" className="contact-link">+40 737 553 140</a>
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
