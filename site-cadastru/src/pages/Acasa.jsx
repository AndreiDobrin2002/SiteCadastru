import { useState, useEffect } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

import icon1 from "../assets/iconTruck.png";
import icon2 from "../assets/iconPeople.png";
import icon3 from "../assets/warehouse.png";

import firmaImage from "../assets/firma.jpg"; // imaginea despre firmă
import "./Acasa.css";
import Statistici from "../components/Statistici.jsx";
import Servicii from "../components/Servicii.jsx";
import MapSection from "../components/MapSection.jsx";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";

const images = [img1, img2, img3];

const navItems = [
    { icon: icon1, label: "CADASTRU & INTABULARE" },
    { icon: icon2, label: "MĂSURĂTORI TOPOGRAFICE" },
    { icon: icon3, label: "EXPERTIZE TEHNICE" },
];

export default function Acasa() {
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageChange = (index) => {
        setCurrentImage(index);
    };

    // Auto-play la fiecare 5 secunde
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <>
            {/* Slideshow + bara servicii */}
            <div className="acasa-container">
                <div
                    className="image-display"
                    style={{ backgroundImage: `url(${images[currentImage]})` }}
                />
                <div className="bottom-navbar">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            className={`nav-button ${currentImage === index ? "active" : ""}`}
                            onClick={() => handleImageChange(index)}
                        >
                            <img src={item.icon} alt={item.label} className="new-icon-style" />
                            <span>{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Despre firmă */}
            <div className="firma-container">
                <div className="firma-text">
                    <h2>Despre firma noastră</h2>
                    <p>
                        Suntem o companie autorizată în domeniul <strong>cadastrului și
                        măsurătorilor topografice</strong>, oferind servicii profesionale
                        pentru persoane fizice, companii și instituții publice.
                    </p>
                    <p>
                        Echipa noastră este formată din ingineri specializați, care utilizează
                        echipamente moderne și software dedicat pentru a asigura
                        <strong> precizie și calitate</strong> în fiecare proiect.
                    </p>
                    <p>
                        Oferim servicii de <em>cadastru și intabulare, planuri parcelare,
                        trasare construcții, expertize tehnice</em> și alte lucrări conexe.
                    </p>
                    <p>
                        În ultimii ani am realizat sute de proiecte cu succes, atât în mediul
                        urban cât și rural, fiind recunoscuți pentru seriozitate, promptitudine
                        și atenție la detalii.
                    </p>
                    <p>
                        Ne dorim să fim partenerul tău de încredere atunci când ai nevoie de
                        lucrări de cadastru și topografie realizate corect și rapid.
                    </p>
                </div>
                <div className="firma-imagine">
                    <img src={firmaImage} alt="Despre firma de cadastru" />
                </div>
            </div>

            <Statistici />
            <Servicii />
            <FAQ />
            <ServicetCTA />
            <MapSection />
            <Footer />
        </>
    );
}