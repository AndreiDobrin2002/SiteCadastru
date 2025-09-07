import React from "react";
import "./Despre.css";
import sediuImg from "../assets/firstpage_logomare.png"; // imaginea sediului (poți schimba)
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
                        Suntem o companie autorizată în domeniul <strong>cadastrului, topografiei și
                        măsurătorilor terestre</strong>, cu experiență solidă în lucrări pentru persoane
                        fizice, juridice și instituții publice.
                    </p>
                    <p>
                        Oferim servicii complete de <strong>întocmire documentații cadastrale, intabulări,
                        măsurători topografice, trasări terenuri și expertize tehnice</strong>. Ne adaptăm
                        fiecărui proiect, respectând normele și legislația în vigoare.
                    </p>
                    <p>
                        Cu o echipă de specialiști și aparatură modernă, garantăm <em>precizie, promptitudine
                        și profesionalism</em>. Punem accent pe comunicare și transparență, astfel încât
                        clienții noștri să primească soluții clare și eficiente.
                    </p>
                    <p>
                        Am finalizat cu succes <strong>sute de lucrări cadastrale și topografice</strong>,
                        de la proiecte rezidențiale până la investiții complexe în domeniul imobiliar și
                        infrastructură.
                    </p>
                    <p>
                        Contactați-ne pentru a afla cum vă putem sprijini în proiectele dumneavoastră.
                    </p>
                </div>

                <div className="despre-image">
                    <img src={sediuImg} alt="Sediul firmei de cadastru"/>
                </div>
            </div>

            <Servicii/>

            <div className="despre-valori">
                <h2>Valorile Noastre</h2>
                <ul>
                    <li>✔️ Profesionalism și seriozitate</li>
                    <li>✔️ Respect față de client și legislație</li>
                    <li>✔️ Transparență și corectitudine</li>
                    <li>✔️ Promptitudine și eficiență</li>
                </ul>
            </div>

            <div className="despre-valori">
                <h2>Avantajele colaborării cu noi</h2>
                <ul>
                    <li>✔️ Servicii complete de cadastru și topografie</li>
                    <li>✔️ Documentații întocmite rapid și corect</li>
                    <li>✔️ Utilizarea echipamentelor moderne de măsurare</li>
                    <li>✔️ Experiență vastă în proiecte diverse</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Pentru mai multe informații sau pentru a solicita o ofertă personalizată,
                        nu ezita să ne contactezi la numărul de telefon sau adresa de email afișate pe site.
                    </p>
                    <p>
                        Suntem aici să te ajutăm cu orice întrebări sau proiecte legate de cadastru și măsurători.
                    </p>
                    <p>
                        Ne angajăm să răspundem prompt și să oferim soluții adaptate nevoilor tale.
                    </p>
                </div>
            </div>

            <FAQ/>
            <ServicetCTA/>
            <MapSection/>
            <Footer/>
        </div>
    );
};

export default Despre;
