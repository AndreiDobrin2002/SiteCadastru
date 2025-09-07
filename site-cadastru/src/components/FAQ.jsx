import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
    {
        question: "Ce este cadastrul și de ce am nevoie de el?",
        answer:
            "Cadastrul reprezintă identificarea, măsurarea și înregistrarea terenurilor și construcțiilor într-un sistem unitar. Este necesar pentru intabulare, vânzare, moștenire, obținerea autorizațiilor de construire și alte tranzacții juridice."
    },
    {
        question: "Cât durează întocmirea unei documentații cadastrale?",
        answer:
            "Durata variază în funcție de complexitatea lucrării și de suprafața imobilului. În general, o documentație de cadastru și intabulare poate dura între câteva zile și câteva săptămâni."
    },
    {
        question: "Ce documente sunt necesare pentru cadastrare?",
        answer:
            "Sunt necesare: actul de proprietate, extras de carte funciară (dacă există), actul de identitate al proprietarului și, după caz, planuri sau autorizații de construire. Echipa noastră vă poate ajuta să aflați lista exactă pentru situația dvs."
    },
    {
        question: "Oferiți și servicii de trasare pentru construcții?",
        answer:
            "Da, asigurăm trasarea pe teren a construcțiilor conform proiectului autorizat, pentru clădiri civile, industriale sau lucrări de infrastructură."
    },
    {
        question: "Pot face cadastru pentru un teren agricol?",
        answer:
            "Desigur. Realizăm planuri parcelare, măsurători pentru terenuri agricole și întocmim documentațiile necesare pentru intabulare sau comasare."
    },
    {
        question: "Ce costuri implică serviciile de cadastru?",
        answer:
            "Costurile diferă în funcție de tipul lucrării (teren, apartament, casă, expertiză tehnică) și de complexitate. După analiza situației dvs., vă vom oferi o ofertă personalizată și transparentă."
    },
    {
        question: "Sunteți autorizați ANCPI?",
        answer:
            "Da, firma noastră colaborează cu ingineri topografi autorizați de Agenția Națională de Cadastru și Publicitate Imobiliară (ANCPI)."
    },
    {
        question: "Cum pot solicita o ofertă?",
        answer:
            "Puteți completa formularul de contact de pe site, ne puteți trimite un email sau ne puteți contacta telefonic. Vom răspunde rapid cu detalii și o estimare de preț."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-wrapper">
            <h2 className="faq-title">Întrebări frecvente</h2>
            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        className={`faq-item ${activeIndex === index ? "active" : ""}`}
                        key={index}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            {item.question}
                            <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                                ▼
                            </span>
                        </div>
                        <div className="faq-answer-wrapper">
                            <div className="faq-answer">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
