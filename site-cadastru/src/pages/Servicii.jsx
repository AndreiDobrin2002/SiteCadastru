import React from "react";
import "./Servicii.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import Statistici from "../components/Statistici.jsx";
import sediuImg from "../assets/firstpage_logomic.jpg"; // imagine despre birou / echipă

const serviciiList = [
    {
        icon: "📐",
        title: "Cadastru și Intabulare",
        description: "Întocmirea documentațiilor cadastrale pentru persoane fizice și juridice.",
        link: "/cadastru-intabulare"
    },
    {
        icon: "🗺️",
        title: "Măsurători Topografice",
        description: "Ridicări topografice pentru construcții, planuri parcelare și documentații tehnice.",
        link: "/masuratori-topografice"
    },
    {
        icon: "🏗️",
        title: "Trasare Construcții",
        description: "Servicii de trasare pe teren pentru construcții civile și industriale.",
        link: "/trasare-constructii"
    },
    {
        icon: "📊",
        title: "Expertize Tehnice",
        description: "Analize și expertize tehnice realizate de ingineri autorizați.",
        link: "/expertize-tehnice"
    },
    {
        icon: "⚖️",
        title: "Consultanță Juridică",
        description: "Asistență în procesul de obținere a avizelor și autorizațiilor necesare.",
    },
    {
        icon: "🤝",
        title: "Suport Clienți",
        description: "Oferim răspunsuri rapide și clare pentru fiecare proiect.",
    },
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

            <ServicetCTA/>

            <div className="serviciu-section">
                <div className="despre-text">
                    <h1>Servicii profesionale de cadastru și topografie</h1>
                    <p>
                        Echipa noastră de ingineri autorizați oferă servicii complete în domeniul cadastrului și
                        măsurătorilor topografice.
                        Utilizăm echipamente moderne și software specializat pentru a asigura acuratețe și eficiență.
                    </p>
                    <p>
                        Fie că este vorba de intabulări, ridicări topografice, planuri parcelare sau trasări de construcții,
                        garantăm lucrări realizate la timp și conform legislației în vigoare.
                    </p>
                </div>
                <div className="despre-image">
                    <img src={sediuImg} alt="Sediul firmei de cadastru" />
                </div>
            </div>

            <Statistici/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Servicii;
