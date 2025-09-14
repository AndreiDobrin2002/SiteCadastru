// src/pages/DocumentatiiIntabulare.jsx
import React from "react";
import ServicePage from "./ServicePage";
import img from "../assets/img3.jpg";

const DocumentatiiIntabulare = () => (
    <ServicePage
        title="Documentații Carte Funciară și Intabulare"
        description={[
            "Întocmim documentațiile necesare pentru înscrierea și actualizarea imobilelor în cartea funciară.",
            "Asigurăm consultanță juridică și tehnică pentru obținerea tuturor actelor necesare.",
            "Lucrările sunt realizate conform legislației în vigoare, cu termene rapide."
        ]}
        image={img}
    />
);

export default DocumentatiiIntabulare;
