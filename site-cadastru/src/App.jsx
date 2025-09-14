import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Acasa from "./pages/Acasa.jsx";
import Despre from "./pages/Despre.jsx";
import Servicii from "./pages/Servicii.jsx";
import Galerie from './pages/Galerie.jsx';
import Contact from "./pages/Contact.jsx";
import Oferta from "./pages/Oferta.jsx";

import CadastruTopografie from "./pages/CadastruTopografie";
import DocumentatiiIntabulare from "./pages/DocumentatiiIntabulare";
import AlipiriDezlipiri from "./pages/AlipiriDezlipiri.jsx";
import Apartamentari from "./pages/Apartamentări.jsx";
import Trasari from "./pages/Trasări.jsx";
import TopologieGeodezieCartografie from "./pages/TopografieGeodezieCartografie.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <ScrollToTop />
            <div className="content" style={{ margin: 0, padding: 0 }}>
                <Routes>
                    <Route path="/" element={<Acasa />} />
                    <Route path="/despre" element={<Despre />} />
                    <Route path="/servicii" element={<Servicii />} />
                    <Route path="/galerie" element={<Galerie />} />

                    <Route path="/cadastru-topografie" element={<CadastruTopografie />} />
                    <Route path="/documentatii-carte-funciara" element={<DocumentatiiIntabulare />} />
                    <Route path="/alipiri-dezlipiri" element={<AlipiriDezlipiri />} />
                    <Route path="/apartamentari" element={<Apartamentari />} />
                    <Route path="/trasari" element={<Trasari />} />
                    <Route path="/topografie-geodezie-cartografie" element={<TopologieGeodezieCartografie />} />

                    <Route path="/oferta" element={<Oferta />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
