import React from "react";
import "./Despre.css";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import sediuImg from "../assets/img6.jpg";

const Apartamentari = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Apartamentări</h1>

            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Oferim servicii complete de <strong>apartamentare</strong> pentru clădiri noi sau existente —
                        procesul prin care un imobil este <strong>împărțit în unități individuale</strong> (apartamente, spații comerciale, birouri)
                        și înscris corespunzător în <strong>Cartea Funciară</strong>.
                    </p>
                    <p>
                        Echipa noastră se ocupă de <strong>toate etapele necesare</strong> — de la măsurători și întocmirea documentației cadastrale
                        până la depunerea actelor la <strong>Oficiul de Cadastru și Publicitate Imobiliară (OCPI)</strong>.
                    </p>
                    <p>
                        Asigurăm o <strong>procesare rapidă, corectă și completă</strong>, astfel încât fiecare apartament să fie intabulat legal
                        și gata de vânzare sau închiriere.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Servicii de apartamentare și cadastru" />
                </div>
            </div>

            <div className="despre-subsection">
                <h2>🏢 Ce înseamnă apartamentarea?</h2>
                <p>
                    Apartamentarea reprezintă <strong>delimitarea și înregistrarea distinctă</strong> a fiecărei unități locative
                    dintr-un imobil (apartament, garaj, spațiu comercial), astfel încât fiecare să aibă <strong>propriul număr cadastral și carte funciară individuală</strong>.
                </p>
                <p>
                    Procesul este obligatoriu în cazul <strong>vânzării, donației sau moștenirii</strong> unui apartament
                    dintr-un imobil colectiv și trebuie realizat conform normativelor ANCPI.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>📋 Ce include serviciul nostru</h2>
                <ul>
                    <p>✅ Măsurători topografice și identificarea exactă a fiecărei unități</p>
                    <p>✅ Întocmirea planurilor de apartamentare și a releveelor</p>
                    <p>✅ Calculul cotelor indivize și al părților comune</p>
                    <p>✅ Redactarea documentației tehnice pentru OCPI</p>
                    <p>✅ Depunerea și urmărirea dosarului până la obținerea numerelor cadastrale</p>
                </ul>
                <p>
                    Toate lucrările sunt executate cu <strong>precizie milimetrică</strong> și în conformitate cu
                    <strong> normele cadastrale actuale</strong>.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>⚙️ Etapele apartamentării</h2>
                <ul>
                    <p>1️⃣ Măsurători topografice la fața locului</p>
                    <p>2️⃣ Întocmirea releveelor și planurilor de apartamentare</p>
                    <p>3️⃣ Calculul cotelor de proprietate comună</p>
                    <p>4️⃣ Întocmirea documentației cadastrale</p>
                    <p>5️⃣ Depunerea și finalizarea înregistrării la OCPI</p>
                </ul>
                <p>
                    În funcție de complexitatea imobilului, procesul se finalizează în <strong>5–10 zile lucrătoare</strong>.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>📐 Documente necesare</h2>
                <ul>
                    <p>📄 Actul de proprietate al imobilului</p>
                    <p>📄 Autorizația de construire (pentru clădiri noi)</p>
                    <p>📄 Planul de arhitectură și releveele existente</p>
                    <p>📄 Cadastrul vechi (dacă există)</p>
                    <p>📄 Copii după actele de identitate ale proprietarilor</p>
                </ul>
                <p>
                    În cazul în care unele documente lipsesc, oferim <strong>consultanță gratuită</strong> pentru obținerea lor.
                </p>
            </div>

            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Experiență vastă în apartamentări, dezmembrări și alipiri</li>
                    <li>✔️ Documentații conforme și aprobate fără respingere</li>
                    <li>✔️ Timp redus de execuție și comunicare constantă</li>
                    <li>✔️ Consultanță juridică și tehnică pe tot parcursul procesului</li>
                    <li>✔️ Prețuri transparente și oferte personalizate</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Ai nevoie de <strong>apartamentarea unui imobil</strong> sau dorești să
                        <strong> intabulezi apartamentele existente</strong>?
                    </p>
                    <p>
                        Trimite-ne detaliile proiectului tău, iar echipa noastră îți va oferi o ofertă personalizată
                        și asistență completă pentru întocmirea documentației.
                    </p>
                    <p>
                        Ne poți contacta telefonic, prin email sau direct din formularul de contact al site-ului.
                    </p>
                </div>
            </div>

            <FAQ />
            <ServicetCTA />
            <Footer />
        </div>
    );
};

export default Apartamentari;
