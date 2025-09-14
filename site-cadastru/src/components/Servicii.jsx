import "./Servicii.css";
import { Link } from "react-router-dom";
import img1 from "../assets/logo.png";
import img2 from "../assets/logo2.png";
import img3 from "../assets/logo3.png";

const servicii = [
    {
        title: "Cadastru și Topografie Inginerească",
        text: "Realizăm lucrări de cadastru și topografie inginerească la standarde profesionale, pentru proiecte civile și industriale.",
        img: img1,
        link: "/cadastru-topografie",
    },
    {
        title: "Documentații Carte Funciară și Intabulare",
        text: "Întocmim documentații pentru înscrierea și actualizarea imobilelor în cartea funciară și pentru intabulare.",
        img: img2,
        link: "/documentatii-carte-funciara",
    },
    {
        title: "Topografie și Geodezie",
        text: "Oferim servicii complete de topografie și geodezie, folosind echipamente moderne și tehnologie GPS.",
        img: img3,
        link: "/topografie-geodezie",
    },
    {
        title: "Cartografie",
        text: "Realizăm planuri cartografice detaliate pentru lucrări civile, industriale sau agricole.",
        img: img1,
        link: "/cartografie",
    },
    {
        title: "Dezlipiri și Alipiri",
        text: "Întocmim documentațiile necesare pentru dezlipirea sau alipirea terenurilor, conform normelor legale.",
        img: img2,
        link: "/dezlipiri-alipiri",
    },
    {
        title: "Apartamentări și Reapartamentări",
        text: "Oferim servicii de apartamentare și reapartamentare, cu documentații cadastrale complete.",
        img: img3,
        link: "/apartamentari",
    },
    {
        title: "Trasări Construcții",
        text: "Executăm trasări pentru construcții civile și industriale, respectând proiectele tehnice.",
        img: img1,
        link: "/trasari-constructii",
    },
];

export default function Servicii() {
    return (
        <div className="servicii-section">
            <div className="servicii-left">
                <div className="underline" />
                <h2>SERVICIILE NOASTRE</h2>
                <p>
                    Cu o echipă de <strong>specialiști autorizați</strong> și experiență
                    vastă în domeniu, vă oferim servicii complete de cadastru, topografie și geodezie.
                </p>
            </div>

            <div className="servicii-right">
                {servicii.map((item, index) => (
                    <div className="serviciu-card" key={index}>
                        <img src={item.img} alt={item.title} />
                        <div className="serviciu-content">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <Link to={item.link} className="read-more-link">
                                Detalii →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
