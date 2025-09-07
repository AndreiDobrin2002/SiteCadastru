import "./Servicii.css";
import { Link } from "react-router-dom";
import img1 from "../assets/logo.png";
import img2 from "../assets/logo2.png";
import img3 from "../assets/logo3.png";

const servicii = [
    {
        title: "Cadastru și Intabulare",
        text: "Oferim o gamă variată de servicii de cadastru și Intabulare pentru persoane fizice și juridice.",
        img: img1,
        link: "/cadastru-intabulare",
    },
    {
        title: "Măsurători Topografice",
        text: "Oferim clienților noștri servicii de măsurători topografice de cea mai bună calitate ca rezultat al experienței de peste 12 ani.",
        img: img2,
        link: "/masuratori-topografice",
    },
    {
        title: "Expertize Tehnice",
        text: "Societatea noastră vă pune la dispoziție servicii de expertize tehnice realizate de ingineri autorizați.",
        img: img3,
        link: "/expertize-tehnice",
    },
];

export default function Servicii() {
    return (
        <div className="servicii-section">
            <div className="servicii-left">
                <div className="underline" />
                <h2>SERVICIILE NOASTRE</h2>
                <p>
                    Cu peste <strong>12 ani experiență</strong> în domeniu, echipa noastră
                    vă poate oferi servicii de cea mai bună calitate precum
                </p>
            </div>

            <div className="servicii-right">
                {servicii.map((item, index) => (
                    <div className="serviciu-card" key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className="serviciu-content">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <Link to={item.link} className="read-more-link">Detalii →</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
