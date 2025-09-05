import React, { useState, useEffect } from "react";
import "./Comanda.css";
import Footer from "../components/Footer.jsx";

const Oferta = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
        typeService: "",
        details: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("_template", "table");  // Aici e cheia pentru tabel
        form.append("Serviciul", formData.typeService);
        form.append("Localitatea", formData.city);
        form.append("Nume", formData.name);
        form.append("Telefon", formData.phone);
        form.append("Email", formData.email);
        form.append("Detalii suplimentare", formData.details);
        form.append("_captcha", "false");

        fetch("https://formsubmit.co/andreidobrin12@gmail.com", {
            method: "POST",
            body: form,
        })
            .then(response => {
                if (response.ok) {
                    setSubmitted(true);
                    setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        city: "",
                        typeService: "",
                        details: "",
                    });
                } else {
                    alert("A apărut o eroare. Încearcă din nou.");
                }
            })
            .catch(() => {
                alert("A apărut o eroare la trimitere.");
            });
    };

    useEffect(() => {
        if (submitted) {
            const timeout = setTimeout(() => {
                setSubmitted(false);
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [submitted]);

    return (
        <div className="comanda-page">
            <h1>Solicită ofertă</h1>
            <div className="comanda-intro">
                <p>
                    Completează formularul de mai jos pentru a solicita rapid o ofertă.
                    Te vom contacta în cel mai scurt timp posibil!
                </p>
            </div>

            <form className="comanda-form" onSubmit={handleSubmit}>
                <select
                    name="typeService"
                    value={formData.typeService}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selectează serviciul *</option>
                    <option value="Cadastru">Cadastru</option>
                    <option value="Intabulare">Intabulare</option>
                </select>
                <input
                    type="text"
                    name="city"
                    placeholder="Localitatea *"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Nume complet *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="details"
                    placeholder="Detalii suplimentare"
                    value={formData.details}
                    onChange={handleChange}
                />
                <button type="submit">Trimite comanda</button>
            </form>

            {submitted && (
                <div className="comanda-success">
                    <h3>Mulțumim!</h3>
                    <p>Comanda ta a fost trimisă cu succes.</p>
                </div>
            )}

            <Footer/>
        </div>
    );
};

export default Oferta;
