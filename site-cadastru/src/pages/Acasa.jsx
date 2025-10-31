import firmaImage from "../assets/img18.jpg"; // imaginea despre firmă
import firmaVideo from "../assets/video.mp4";
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
            {/* Secțiune imagine erou */}
            <div className="hero-section"></div>

            {/* Despre firmă */}
            <div className="firma-container">
                <div className="firma-imagine">
                    <img src={firmaImage} alt="Despre firma de cadastru"/>
                </div>

                <div className="firma-text">
                    <h2>Despre firma noastră</h2>
                    <p>
                        Suntem o companie autorizată în domeniul <strong>cadastrului, topografiei și geodeziei</strong>,
                        oferind servicii profesionale pentru persoane fizice, companii și instituții publice.
                    </p>
                    <p>
                        Echipa noastră este formată din <strong>ingineri specializați</strong>, care utilizează
                        echipamente moderne și software de ultimă generație pentru a garanta
                        precizie și calitate în fiecare proiect realizat.
                    </p>
                    <p>
                        Principalele noastre servicii includ:
                    </p>
                    <ul>
                        <p>📍 Cadastru și topografie inginerească</p>
                        <p>📄 Documentații pentru Carte Funciară și Intabulare</p>
                        <p>🗺️ Topografie, Geodezie și Cartografie</p>
                        <p>✂️ Dezlipiri și Alipiri de terenuri</p>
                        <p>🏢 Apartamentări și Reapartamentări</p>
                        <p>📐 Trasări pentru construcții și lucrări inginerești</p>
                    </ul>
                    <p>
                        În ultimii ani am realizat numeroase proiecte cu succes, atât în mediul urban, cât și rural,
                        fiind apreciați pentru <strong>seriozitate, promptitudine și atenție la detalii</strong>.
                    </p>
                    <p>
                        Ne dorim să fim partenerul tău de încredere atunci când ai nevoie de lucrări de cadastru
                        și topografie realizate corect și rapid.
                    </p>
                </div>

                <div className="firma-video-container">
                    <video
                        src={firmaVideo}
                        controls
                        autoPlay
                        muted
                        loop
                        className="firma-video"
                    />
                </div>
            </div>

            {/* Alte secțiuni */}
            <Statistici/>
            <Servicii/>
            <FAQ/>
            <ServicetCTA/>
            <MapSection/>
            <Footer/>
        </>
    );
}
