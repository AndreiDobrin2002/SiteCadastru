import React from "react";
import "./Despre.css";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import sediuImg from "../assets/img3.jpg";

const TopologieGeodezieCartografie = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Topografie, Geodezie și Cartografie</h1>

            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Oferim <strong>servicii profesionale de topografie, geodezie și cartografie</strong>,
                        utilizând echipamente de ultimă generație și software dedicat pentru a asigura
                        precizia și fiabilitatea măsurătorilor efectuate.
                    </p>
                    <p>
                        Indiferent dacă este vorba de proiecte imobiliare, lucrări de infrastructură,
                        agricultură sau planificare urbană, <strong>echipa noastră de specialiști </strong>
                        oferă soluții complete, adaptate fiecărui tip de lucrare.
                    </p>
                    <p>
                        Fiecare proiect este tratat cu seriozitate și atenție la detalii,
                        pentru a asigura <em>rezultate conforme standardelor și cerințelor legale în vigoare</em>.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Servicii topografice și geodezice" />
                </div>
            </div>

            <div className="despre-subsection">
                <h2>📐 Topografie</h2>
                <p>
                    Realizăm <strong>ridicări topografice detaliate</strong> pentru construcții civile, industriale și lucrări de infrastructură.
                    Obținem modele digitale ale terenului, planuri parcelare și planuri topografice necesare în fazele de proiectare și execuție.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>🌍 Geodezie</h2>
                <p>
                    Efectuăm <strong>măsurători geodezice de înaltă precizie</strong> pentru determinarea coordonatelor în rețele naționale sau locale.
                    Folosim tehnologii GNSS (GPS), stații totale și nivelmente digitale, garantând precizie milimetrică în rezultatele obținute.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>🗺️ Cartografie</h2>
                <p>
                    Creăm <strong>hărți digitale și planuri tematice</strong> în format CAD sau GIS, utile pentru urbanism, agricultură, mediu și cadastru general.
                    Generăm reprezentări clare și intuitive care oferă o imagine completă asupra terenului și construcțiilor existente.
                </p>
            </div>

            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Echipamente moderne (stații totale, drone, receptoare GPS profesionale)</li>
                    <li>✔️ Măsurători rapide, precise și conforme normelor ANCPI</li>
                    <li>✔️ Personal autorizat și cu experiență în proiecte complexe</li>
                    <li>✔️ Livrare rapidă a planurilor și documentațiilor în format digital</li>
                    <li>✔️ Transparență totală și consultanță gratuită pe tot parcursul proiectului</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Ai nevoie de servicii de <strong>topografie, geodezie sau cartografie</strong>?
                        Trimite-ne detaliile proiectului tău și îți vom oferi o ofertă personalizată.
                    </p>
                    <p>
                        Ne poți contacta prin <strong>telefon, email</strong> sau direct din formularul de contact al site-ului.
                        Suntem aici pentru a-ți oferi cele mai potrivite soluții tehnice.
                    </p>
                </div>
            </div>

            <FAQ />
            <ServicetCTA />
            <Footer />
        </div>
    );
};

export default TopologieGeodezieCartografie;
