import firmaImage from "../assets/logo3.png"; // imaginea despre firmă
import "./Acasa.css";
import Statistici from "../components/Statistici.jsx";
import Servicii from "../components/Servicii.jsx";
import MapSection from "../components/MapSection.jsx";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";

export default function Acasa() {
    return (
        <>
            {/* O singură secțiune pentru imagine */}
            <div className="hero-section"></div>

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
