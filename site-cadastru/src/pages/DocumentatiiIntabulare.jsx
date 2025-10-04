import React from "react";
import "./Despre.css";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";
import ServicetCTA from "../components/ServiceCTA.jsx";
import sediuImg from "../assets/serviciu2.jpg";

const DocumentatiiIntabulare = () => {
    return (
        <div className="despre-container">
            <h1 className="despre-title">Documentații Cadastrale și Intabulare</h1>

            <div className="despre-section">
                <div className="intermediere-text">
                    <p>
                        Oferim servicii complete de <strong>întocmire a documentațiilor cadastrale</strong> și
                        <strong> intabulare în cartea funciară</strong>, pentru persoane fizice, juridice și instituții publice.
                    </p>
                    <p>
                        Ne ocupăm de fiecare etapă a procesului — de la măsurători topografice până la depunerea
                        documentelor la <strong>Oficiul de Cadastru și Publicitate Imobiliară (OCPI)</strong>.
                    </p>
                    <p>
                        Punem accent pe <strong>acuratețe, respectarea termenelor și consultanță completă</strong> pentru clienții noștri.
                    </p>
                </div>

                <div className="intermediere-image">
                    <img src={sediuImg} alt="Servicii de documentații cadastrale și intabulare" />
                </div>
            </div>

            <div className="despre-subsection">
                <h2>📄 Documentații Cadastrale</h2>
                <p>
                    Realizăm documentațiile tehnice necesare pentru:
                </p>
                <ul>
                    <p>✅ Înregistrarea imobilelor noi sau existente în Cartea Funciară</p>
                    <p>✅ Actualizarea datelor cadastrale (suprafață, categorie de folosință, construcții)</p>
                    <p>✅ Dezmembrări, alipiri și identificări de imobile</p>
                    <p>✅ Relevee și planuri de amplasament</p>
                </ul>
                <p>
                    Toate documentațiile sunt întocmite conform <strong>normativelor ANCPI</strong> și pot fi depuse
                    direct la OCPI de către echipa noastră, pentru a economisi timp și efort.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>🏠 Intabulare</h2>
                <p>
                    Ne ocupăm de procesul complet de <strong>înscriere a proprietății în Cartea Funciară</strong>,
                    indiferent dacă este vorba de terenuri, apartamente, construcții noi sau modificări existente.
                </p>
                <ul>
                    <p>✔️ Verificarea actelor de proprietate</p>
                    <p>✔️ Redactarea și depunerea documentației la OCPI</p>
                    <p>✔️ Urmărirea statusului și preluarea extraselor finale</p>
                </ul>
                <p>
                    Cu noi, întregul proces este <strong>rapid, transparent și fără complicații</strong>.
                </p>
            </div>

            <div className="despre-subsection">
                <h2>⚙️ Alte Servicii Complementare</h2>
                <p>
                    În completarea documentațiilor cadastrale, oferim și:
                </p>
                <ul>
                    <p>📍 Trasări și măsurători topografice</p>
                    <p>📐 Consultanță tehnică și juridică pentru documentații</p>
                    <p>📊 Verificarea și corectarea erorilor din planurile existente</p>
                    <p>🗺️ Reprezentări grafice și planuri digitale pentru arhivare</p>
                </ul>
            </div>

            <div className="despre-valori">
                <h2>🎯 De ce să alegi echipa noastră?</h2>
                <ul>
                    <li>✔️ Expertiză vastă în cadastru, intabulare și topografie</li>
                    <li>✔️ Documentații conforme și aprobate fără respingere</li>
                    <li>✔️ Timp de execuție redus și comunicare constantă cu clientul</li>
                    <li>✔️ Echipamente moderne și software profesional</li>
                    <li>✔️ Consultanță gratuită și transparență completă</li>
                </ul>
            </div>

            <div className="despre-contact">
                <h2>📞 Contactează-ne</h2>
                <div className="despre-contact-text">
                    <p>
                        Ai nevoie de <strong>întocmirea unei documentații cadastrale</strong> sau dorești să
                        <strong> intabulezi o proprietate</strong>?
                    </p>
                    <p>
                        Trimite-ne detaliile proiectului tău, iar echipa noastră îți va oferi o ofertă personalizată
                        și toate informațiile de care ai nevoie pentru a începe.
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

export default DocumentatiiIntabulare;
