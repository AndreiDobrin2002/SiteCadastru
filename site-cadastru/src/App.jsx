import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Navbar from "./components/Navbar.jsx";
import Acasa from "./pages/Acasa.jsx";
import Despre from "./pages/Despre.jsx";
import Servicii from "./pages/Servicii.jsx";
import CadastruIntabulare from "./pages/CadastruIntabulare.jsx";
import Masuratori from "./pages/Masuratori.jsx";
import Expertize from "./pages/Expertize.jsx";
import Contact from "./pages/Contact.jsx";
import Galerie from './pages/Galerie.jsx';
import Oferta from "./pages/Oferta.jsx";

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
                    <Route path="/cadastru-intabulare" element={<CadastruIntabulare />} />
                    <Route path="/masuratori-topografice" element={<Masuratori />} />
                    <Route path="/expertize-tehnice" element={<Expertize />} />
                    <Route path="/oferta" element={<Oferta />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
