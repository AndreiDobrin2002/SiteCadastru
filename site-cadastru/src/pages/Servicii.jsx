import React from "react";
import "./Servicii.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import Statistici from "../components/Statistici.jsx";
import sediuImg from "../assets/img12.jpg"; // imagine despre birou / echipă

const serviciiList = [
    {
        icon: "📐",
        title: "Cadastru și Topografie Inginerească",
        description: "Servicii complete de cadastru și măsurători topografice pentru proiecte civile și industriale.",
        link: "/cadastru-topografie"
    },
    {
        icon: "📜",
        title: "Documentații Carte Funciară și Intabulare",
        description: "Întocmim documentațiile necesare pentru înscrierea și actualizarea în cartea funciară.",
        link: "/documentatii-carte-funciara"
    },
    // {
    //     icon: "🗺️",
    //     title: "Topografie",
    //     description: "Ridicări topografice, planuri parcelare și planuri de situație detaliate.",
    //     link: "/topografie"
    // },
    // {
    //     icon: "🌍",
    //     title: "Geodezie",
    //     description: "Lucrări geodezice pentru proiecte complexe de infrastructură și dezvoltare urbană.",
    //     link: "/geodezie"
    // },
    // {
    //     icon: "🛰️",
    //     title: "Cartografie",
    //     description: "Realizarea planurilor și hărților digitale cu tehnologie GIS și GPS.",
    //     link: "/cartografie"
    // },
    {
        icon: "🗺️",
        title: "Topografie, Geodezie și Cartografie",
        description: "Oferim servicii complete de topografie, geodezie și cartografie, folosind echipamente moderne și tehnologie GPS, pentru lucrări civile, industriale sau agricole.",
        link: "/topografie-geodezie-cartografie"
    },
    {
        icon: "➕➖",
        title: "Alipiri și Dezlipiri",
        description: "Întocmim documentații cadastrale pentru dezmembrarea sau comasarea imobilelor.",
        link: "/alipiri-dezlipiri"
    },
    {
        icon: "🏢",
        title: "Apartamentări",
        description: "Documentații pentru apartamentarea construcțiilor și înscrierea unităților locative.",
        link: "/apartamentari"
    },
    {
        icon: "🏗️",
        title: "Trasări",
        description: "Trasarea pe teren a limitelor de proprietate și a construcțiilor.",
        link: "/trasari"
    },
    { icon: "🤝", title: "Suport Clienți", description: "Oferim răspunsuri rapide și clare pentru fiecare proiect.", },
];

const Servicii = () => {
    return (
        <div className="servicii-container">
            <h1 className="servicii-title">Serviciile Noastre</h1>

            <div className="servicii-grid">
                {serviciiList.map(({icon, title, description, link}, index) => {
                    const CardContent = (
                        <>
                            <div className="serviciu-icon">{icon}</div>
                            <h3 className="serviciu-title">{title}</h3>
                            <p className="serviciu-description">{description}</p>
                            {link && (
                                <span className="serviciu-link">Detalii →</span>
                            )}
                        </>
                    );

                    return link ? (
                        <Link to={link} key={index} className="serviciu-card link-card">
                            {CardContent}
                        </Link>
                    ) : (
                        <div key={index} className="serviciu-card">
                            {CardContent}
                        </div>
                    );
                })}
            </div>

            <ServicetCTA />

            <div className="serviciu-section">
                <div className="despre-text">
                    <h1>Servicii profesionale de cadastru și topografie</h1>
                    <p>
                        Echipa noastră de ingineri autorizați oferă servicii complete în domeniul cadastrului,
                        topografiei și geodeziei. Utilizăm echipamente moderne și software specializat pentru
                        a asigura <strong>acuratețe și eficiență</strong>.
                    </p>
                    <p>
                        Indiferent dacă ai nevoie de intabulări, dezlipiri, apartamentări sau trasări pentru construcții,
                        garantăm lucrări realizate <em>corect, rapid și în conformitate cu legislația</em>.
                    </p>
                </div>
                <div className="despre-image">
                    <img src={sediuImg} alt="Sediul firmei de cadastru" />
                </div>
            </div>

            <Statistici />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Servicii;
