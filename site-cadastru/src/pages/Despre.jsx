import React from "react";
import "./Despre.css";
import sediuImg from "../assets/firstpage_logomare.png";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import MapSection from "../components/MapSection.jsx";
import Servicii from "../components/Servicii.jsx";

const Despre = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Despre Noi</h1>

            <div className="despre-section">
                <div className="despre-text">
                    <p>
                        Suntem o firmă autorizată în domeniul <strong>cadastrului, topografiei,
                        geodeziei și cartografiei</strong>, cu experiență în lucrări pentru persoane
                        fizice, juridice și instituții publice.
                    </p>
                    <p>
                        Oferim servicii complete: <strong>cadastru și intabulare, documentații pentru
                        carte funciară, topografie inginerească, trasări, dezlipiri/alipiri și apartamentări</strong>.
                        Respectăm legislația și asigurăm transparență în fiecare etapă a proiectului.
                    </p>
                    <p>
                        Echipa noastră este formată din ingineri autorizați care utilizează <em>echipamente moderne
                        și software specializat</em> pentru rezultate precise și rapide.
                    </p>
                    <p>
                        Am finalizat cu succes <strong>numeroase proiecte cadastrale și topografice</strong>,
                        de la lucrări rezidențiale la investiții de amploare în domeniul imobiliar și infrastructură.
                    </p>
                    <p>
                        Ne dorim să fim partenerul tău de încredere pentru orice tip de lucrare cadastrală.
                    </p>
                </div>

                <div className="despre-image">
                    <img src={sediuImg} alt="Sediul firmei de cadastru" />
                </div>
            </div>

            {/* Secțiunea servicii */}
            <Servicii />

            {/* Valorile companiei */}
            <div className="despre-valori">
                <h2>Valorile Noastre</h2>
                <ul>
                    <li>✔️ Profesionalism și seriozitate</li>
                    <li>✔️ Respect față de client și legislație</li>
                    <li>✔️ Transparență și corectitudine</li>
                    <li>✔️ Promptitudine și eficiență</li>
                </ul>
            </div>

            {/* Avantaje colaborare */}
            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Servicii integrate de <strong>cadastru, topografie și geodezie</strong></li>
                    <li>✔️ <strong>Experiență vastă</strong> în apartamentări, dezmembrări și alipiri</li>
                    <li>✔️ <strong>Documentații conforme și aprobate</strong> fără respingere</li>
                    <li>✔️ <strong>Tehnologie modernă</strong>: stații totale, GPS RTK, drone și software profesional
                    </li>
                    <li>✔️ <strong>Măsurători rapide și precise</strong>, conforme normelor ANCPI</li>
                    <li>✔️ <strong>Personal autorizat</strong> și cu experiență în proiecte complexe</li>
                    <li>✔️ <strong>Consultanță tehnică și juridică completă</strong> pe tot parcursul proiectului</li>
                    <li>✔️ <strong>Respectarea termenelor</strong> și a standardelor legale</li>
                    <li>✔️ <strong>Transparență totală</strong> și comunicare constantă cu clientul</li>
                    <li>✔️ <strong>Prețuri corecte</strong> și oferte personalizate în funcție de proiect</li>
                </ul>
            </div>

            {/* Contact scurt */}
            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Vrei să afli mai multe sau să soliciți o ofertă personalizată?
                        Suntem aici să răspundem la toate întrebările tale.
                    </p>
                    <p>
                        Ne poți contacta direct prin telefon sau email, iar echipa noastră
                        te va sprijini în cel mai scurt timp posibil.
                    </p>
                </div>
            </div>

            {/* FAQ + CTA + Hartă + Footer */}
            <FAQ/>
            <ServicetCTA/>
            <MapSection/>
            <Footer/>
        </div>
    );
};

export default Despre;
