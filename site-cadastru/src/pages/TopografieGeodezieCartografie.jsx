import React from "react";
import ServicePage from "./ServicePage";
import img from "../assets/img1.jpg"; // imagine reprezentativă

const TopologieGeodezieCartografie = () => (
    <ServicePage
        title="Topografie, Geodezie și Cartografie"
        description={[
            "Oferim servicii complete de cadastru și topografie pentru persoane fizice și juridice.",
            "Realizăm măsurători precise utilizând echipamente moderne și software specializat.",
            "Ne ocupăm de întocmirea documentațiilor pentru construcții, drumuri, terenuri agricole și industriale."
        ]}
        image={img}
    />
);

export default TopologieGeodezieCartografie;