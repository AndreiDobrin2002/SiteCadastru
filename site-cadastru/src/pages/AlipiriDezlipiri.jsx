import React from "react";
import "./Despre.css";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import sediuImg from "../assets/serviciu2.jpg";

const AlipiriDezlipiri = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Alipiri și Dezlipiri</h1>

            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Oferim servicii complete de <strong>alipire și dezlipire cadastrală</strong>,
                        procese prin care se <strong>unesc sau se separă</strong> imobile înscrise în
                        Cartea Funciară, în conformitate cu normele <strong>ANCPI</strong>.
                    </p>
                    <p>
                        Aceste operațiuni sunt esențiale pentru <strong>gestionarea corectă a proprietăților</strong>,
                        fie că este vorba despre vânzări, moșteniri, investiții sau dezvoltări imobiliare.
                    </p>
                    <p>
                        Echipa noastră se ocupă de <strong>întocmirea documentației tehnice</strong>,
                        depunerea actelor la <strong>Oficiul de Cadastru și Publicitate Imobiliară (OCPI) </strong>
                        și urmărirea procesului până la finalizarea înregistrării.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Servicii de alipiri și dezlipiri cadastrale" />
                </div>
            </div>

            <div className="despre-subsection">
                <h2>🏡 Ce sunt alipirile și dezlipirile?</h2>
                <p>
                    <strong>Alipirea</strong> reprezintă unirea a două sau mai multe imobile într-unul singur,
                    rezultând o <strong>singură unitate cadastrală</strong> cu un nou număr de carte funciară.
                </p>
                <p>
                    <strong>Dezlipirea</strong> presupune <strong>împărțirea unui teren sau imobil</strong> în mai multe loturi distincte,
                    fiecare având <strong>propriul număr cadastral și carte funciară separată</strong>.
                </p>
                <p>
                    Aceste operațiuni se efectuează în baza <strong>măsurătorilor topografice</strong> și a
                    <strong> documentațiilor cadastrale</strong> întocmite conform legislației în vigoare.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>📋 Serviciile noastre includ</h2>
                <ul>
                    <p>✅ Măsurători topografice precise ale imobilelor implicate</p>
                    <p>✅ Întocmirea documentațiilor tehnice pentru alipiri sau dezlipiri</p>
                    <p>✅ Redactarea planurilor de amplasament și delimitare</p>
                    <p>✅ Calculul noilor suprafețe și actualizarea limitelor cadastrale</p>
                    <p>✅ Depunerea dosarului la OCPI și urmărirea procesului de aprobare</p>
                </ul>
                <p>
                    Toate lucrările sunt realizate de <strong>specialiști autorizați</strong> și sunt conforme
                    cu cerințele <strong>Oficiului de Cadastru și Publicitate Imobiliară</strong>.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>⚙️ Când este necesară o alipire sau dezlipire?</h2>
                <ul>
                    <p>📌 În cazul cumpărării mai multor terenuri ce urmează a fi comasate</p>
                    <p>📌 La parcelarea unui teren mare în mai multe loturi pentru vânzare</p>
                    <p>📌 Pentru modificarea limitelor de proprietate între vecini</p>
                    <p>📌 În cadrul proiectelor imobiliare de dezvoltare</p>
                    <p>📌 În procesele de succesiune sau partaj</p>
                </ul>
                <p>
                    Înainte de începerea lucrării, oferim <strong>consultanță gratuită</strong> privind
                    pașii legali și documentele necesare.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>📐 Documente necesare</h2>
                <ul>
                    <p>📄 Actele de proprietate ale imobilelor implicate</p>
                    <p>📄 Planurile cadastrale existente (dacă sunt disponibile)</p>
                    <p>📄 Extras de carte funciară actualizat</p>
                    <p>📄 Copii după actele de identitate ale proprietarilor</p>
                    <p>📄 Procese-verbale sau acorduri între coproprietari (dacă este cazul)</p>
                </ul>
                <p>
                    Dacă anumite documente lipsesc, oferim <strong>asistență completă</strong> pentru obținerea lor
                    de la instituțiile competente.
                </p>
            </div>

            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Expertiză în toate tipurile de operațiuni cadastrale</li>
                    <li>✔️ Lucrări conforme și aprobate fără întârzieri</li>
                    <li>✔️ Termene rapide de execuție și comunicare permanentă</li>
                    <li>✔️ Echipamente moderne și software profesional</li>
                    <li>✔️ Consultanță tehnică și juridică completă</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Ai nevoie de <strong>alipirea</strong> sau <strong>dezlipirea</strong> unui teren sau imobil?
                    </p>
                    <p>
                        Echipa noastră te ghidează pas cu pas, de la măsurători până la înregistrarea finală în
                        <strong> Cartea Funciară</strong>.
                    </p>
                    <p>
                        Contactează-ne telefonic, prin email sau direct din formularul de contact al site-ului
                        pentru o ofertă personalizată.
                    </p>
                </div>
            </div>

            <FAQ />
            <ServicetCTA />
            <Footer />
        </div>
    );
};

export default AlipiriDezlipiri;
