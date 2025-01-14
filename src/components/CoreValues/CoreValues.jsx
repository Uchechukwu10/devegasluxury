import React, { useEffect, useState, useRef } from "react";
import "./CoreValues.css";
import { FaAward, FaHandshake, FaFaceSmile } from "react-icons/fa6";

const CoreValues = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const values = [
    {
      title: "Excellence",
      description:
        "We are committed to delivering exceptional quality in every project, ensuring every detail reflects precision, elegance, and innovation.",
      icon: <FaAward color="#c09338" size="5rem" />, // Replace with your actual icon
    },
    {
      title: "Integrity",
      description:
        "Transparency, honesty, and ethical practices are at the foundation of everything we do, building trust with every client and partner.",
      icon: <FaHandshake color="#c09338" size="5rem" />, // Replace with your actual icon
    },
    {
      title: "Customer First",
      description:
        "Our clients are at the heart of everything we do. We focus on understanding your needs and delivering solutions that exceed expectations.",
      icon: <FaFaceSmile color="#c09338" size="5rem" />, // Replace with your actual icon
    },
  ];

  return (
    <section
      className={`core-values-section ${isVisible ? "animate" : ""}`}
      id="core-values"
      ref={sectionRef}
    >
      <h2 className="core-values-heading">Our Core Values</h2>
      <div className="core-values-container">
        {values.map((value, index) => (
          <div>
            <span className="core-value-icon">{value.icon}</span>
            <div className="core-value-card" key={index}>
              <h3 className="core-value-title">{value.title}</h3>
              {/* <p className="core-value-description">{value.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
