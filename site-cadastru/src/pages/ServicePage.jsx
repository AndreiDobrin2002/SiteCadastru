// src/pages/ServicePage.jsx
import React from "react";
import Footer from "../components/Footer.jsx";
import FAQ from "../components/FAQ.jsx";

const ServicePage = ({ title, description, image }) => {
    return (
        <div className="service-page">
            <header className="service-header">
                <h1>{title}</h1>
            </header>

            <div className="service-content">
                <div className="service-text">
                    {description.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
                {image && (
                    <div className="service-image">
                        <img src={image} alt={title} />
                    </div>
                )}
            </div>

            <FAQ />
            <Footer />
        </div>
    );
};

export default ServicePage;
