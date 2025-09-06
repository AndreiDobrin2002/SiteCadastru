import CountUp from "react-countup";
import "./Statistici.css";
import { FaMapMarkedAlt, FaCalendarAlt, FaUsers, FaRulerCombined } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const statistici = [
    { icon: <FaMapMarkedAlt />, number: 1200, suffix: "+", text: "Proiecte cadastrale finalizate" },
    { icon: <FaCalendarAlt />, number: 12, suffix: "+", text: "Ani de experiență" },
    { icon: <FaUsers />, number: 800, suffix: "+", text: "Clienți mulțumiți" },
    { icon: <FaRulerCombined />, number: 5000, suffix: "+", text: "Hectare măsurate" },
];

export default function Statistici() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <div className="statistici-container" ref={ref}>
            {statistici.map((stat, index) => (
                <div key={index} className="stat-box">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-number">
                        {inView ? (
                            <CountUp end={stat.number} duration={3.5} suffix={stat.suffix || ""} />
                        ) : (
                            0
                        )}
                    </div>
                    <div className="stat-text">{stat.text}</div>
                </div>
            ))}
        </div>
    );
}
