import React from "react";
import "./Despre.css";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import sediuImg from "../assets/serviciu2.jpg";

const Trasari = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Trasări Topografice și Verificări de Amplasament</h1>

            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Executăm <strong>trasări topografice precise</strong> pentru construcții civile,
                        industriale, drumuri, rețele edilitare și lucrări inginerești.
                    </p>
                    <p>
                        Folosim <strong>echipamente moderne (stații totale, GNSS, drone)</strong> pentru a
                        asigura o poziționare exactă a elementelor proiectate pe teren.
                    </p>
                    <p>
                        Asigurăm <strong>colaborare directă cu arhitecți, ingineri și dezvoltatori</strong>,
                        garantând conformitatea lucrărilor cu planurile de execuție și autorizațiile de construire.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Servicii de trasare topografică" />
                </div>
            </div>

            <div className="despre-subsection">
                <h2>📍 Ce este trasarea topografică?</h2>
                <p>
                    Trasarea reprezintă <strong>transpunerea în teren a proiectului tehnic</strong> —
                    poziționarea exactă a clădirilor, drumurilor sau utilităților conform planurilor de execuție.
                </p>
                <p>
                    Este o etapă esențială în orice lucrare de construcție, deoarece asigură
                    amplasarea corectă a fiecărui element în raport cu coordonatele din proiect.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>⚙️ Tipuri de lucrări efectuate</h2>
                <ul>
                    <p>✅ Trasarea axelor clădirilor, drumurilor și halelor industriale</p>
                    <p>✅ Poziționarea fundațiilor, stâlpilor, pereților și altor elemente structurale</p>
                    <p>✅ Trasarea rețelelor de apă, canalizare, gaze și cabluri subterane</p>
                    <p>✅ Marcarea limitelor de proprietate și a punctelor de detaliu</p>
                    <p>✅ Verificarea amplasamentului construcțiilor existente față de proiect</p>
                </ul>
            </div>

            <div className="despre-subsection">
                <h2>🧭 Cum lucrăm</h2>
                <p>
                    Procesul de trasare se realizează cu <strong>precizie milimetrică</strong> utilizând echipamente
                    moderne și softuri specializate. Fiecare punct trasat este verificat și documentat, pentru a
                    asigura o execuție fidelă proiectului tehnic.
                </p>
                <p>
                    Echipa noastră oferă <strong>rapoarte tehnice și schițe de verificare</strong>,
                    utile în faza de recepție a lucrării și pentru arhivarea tehnică.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>🏗️ Colaborări și asistență tehnică</h2>
                <p>
                    Colaborăm constant cu <strong>birouri de proiectare, firme de construcții și dezvoltatori imobiliari</strong>,
                    oferind sprijin tehnic în toate etapele proiectului — de la fundație până la finalizarea construcției.
                </p>
                <p>
                    Oferim și servicii de <strong>asistență topografică pe șantier</strong>,
                    pentru verificarea în timp real a execuției.
                </p>
            </div>

            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Precizie și promptitudine în fiecare lucrare</li>
                    <li>✔️ Tehnologie modernă: stații totale, GPS RTK, drone</li>
                    <li>✔️ Experiență vastă în construcții civile și industriale</li>
                    <li>✔️ Asistență tehnică dedicată și comunicare constantă</li>
                    <li>✔️ Respectarea normelor tehnice și a termenelor de execuție</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Ai nevoie de <strong>trasarea unei construcții</strong> sau de verificarea
                        amplasamentului unei lucrări?
                    </p>
                    <p>
                        Echipa noastră îți oferă servicii profesionale, rapide și precise, adaptate
                        nevoilor fiecărui proiect.
                    </p>
                    <p>
                        Suntem disponibili prin <strong>telefon, email</strong> sau formularul de contact
                        pentru a discuta detaliile tehnice și a stabili o programare.
                    </p>
                </div>
            </div>

            <FAQ />
            <ServicetCTA />
            <Footer />
        </div>
    );
};

export default Trasari;
