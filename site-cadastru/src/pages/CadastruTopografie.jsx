import React from "react";
import "./Despre.css";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import sediuImg from "../assets/serviciu2.jpg";

const CadastruTopografie = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Cadastru și Topografie Inginerească</h1>

            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Firma noastră oferă <strong>servicii complete de cadastru și topografie inginerească</strong>,
                        adresate atât persoanelor fizice, cât și companiilor sau instituțiilor publice.
                    </p>
                    <p>
                        Ne ocupăm de <em>întocmirea documentațiilor cadastrale</em> pentru construcții, terenuri agricole,
                        industriale sau urbane, asigurând precizia măsurătorilor și conformitatea cu legislația în vigoare.
                    </p>
                    <p>
                        Cu o echipă de specialiști autorizați și aparatură performantă, garantăm lucrări
                        <strong> exacte, rapide și realizate la cele mai înalte standarde profesionale</strong>.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Servicii de cadastru și topografie inginerească" />
                </div>
            </div>

            <div className="despre-subsection">
                <h2>📄 Cadastru</h2>
                <p>
                    Realizăm documentațiile cadastrale pentru <strong>înregistrarea și actualizarea imobilelor în
                    Cartea Funciară</strong>. Serviciile noastre includ:
                </p>
                <ul>
                    <li>Cadastru sistematic și sporadic</li>
                    <li>Înscrierea construcțiilor noi sau existente</li>
                    <li>Releveu și planuri de amplasament</li>
                    <li>Actualizări și rectificări în evidențele cadastrale</li>
                </ul>
                <p>
                    Asigurăm întocmirea corectă a tuturor documentelor pentru depunerea la <strong>ANCPI / Oficiul de Cadastru și Publicitate Imobiliară (OCPI)</strong>.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>📐 Topografie Inginerească</h2>
                <p>
                    Oferim servicii profesionale de <strong>ridicări și măsurători topografice</strong> necesare în
                    proiectarea, execuția și monitorizarea lucrărilor inginerești.
                </p>
                <ul>
                    <li>Planuri topografice pentru construcții, drumuri și utilități</li>
                    <li>Trasări de aliniamente și puncte de detaliu</li>
                    <li>Ridicări topo pentru infrastructură, clădiri și rețele edilitare</li>
                    <li>Monitorizarea deformațiilor și tasărilor în construcții</li>
                </ul>
                <p>
                    Utilizăm <strong>stații totale, drone și receptoare GPS profesionale</strong> pentru a obține
                    precizie milimetrică și rezultate conforme normelor tehnice.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>🏗️ Lucrări complexe și colaborări tehnice</h2>
                <p>
                    Echipa noastră colaborează constant cu <strong>birouri de arhitectură, firme de construcții și dezvoltatori imobiliari</strong>,
                    oferind suport tehnic pe tot parcursul proiectului.
                </p>
                <p>
                    De la <em>trasarea fundațiilor</em> până la <em>verificarea amplasamentului construcțiilor finalizate</em>,
                    suntem partenerul tău de încredere în domeniul cadastral și topografic.
                </p>
            </div>

            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Expertiză în cadastru și topografie inginerească</li>
                    <li>✔️ Echipamente moderne și software specializat</li>
                    <li>✔️ Respectarea termenelor și standardelor legale</li>
                    <li>✔️ Documentații clare, acceptate de ANCPI</li>
                    <li>✔️ Consultanță gratuită și transparență totală</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Ai nevoie de <strong>măsurători cadastrale sau topografice</strong>?
                        Contactează-ne pentru o ofertă adaptată nevoilor tale.
                    </p>
                    <p>
                        Ne poți suna sau trimite un email, iar echipa noastră îți va răspunde prompt
                        cu informațiile și soluțiile potrivite proiectului tău.
                    </p>
                </div>
            </div>

            <FAQ />
            <ServicetCTA />
            <Footer />
        </div>
    );
};

export default CadastruTopografie;
