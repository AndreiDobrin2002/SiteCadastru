import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Acasa from "./pages/Acasa.jsx";
import Despre from "./pages/Despre.jsx";
import Servicii from "./pages/Servicii.jsx";
import TransportAuto from "./pages/TransportAuto.jsx";
import Intermedieri from "./pages/Intermedieri.jsx";
import Logistica from "./pages/Logistica.jsx";
import Contact from "./pages/Contact.jsx";
import Galerie from './pages/Galerie.jsx';
import Comanda from "./pages/Comanda.jsx";

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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/galerie" element={<Galerie />} />
                    <Route path="/transport-auto" element={<TransportAuto />} />
                    <Route path="/intermedieri-transport" element={<Intermedieri />} />
                    <Route path="/logistica-depozitare" element={<Logistica />} />
                    <Route path="/comanda" element={<Comanda />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
