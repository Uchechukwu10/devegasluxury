import React, { useEffect, useState, useRef } from "react";
import "./Services.css";

const Services = () => {
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

  const services = [
    {
      title: "Real Estate Development",
      description:
        "At De Vegas Luxury Homes and Properties, we pride ourselves on transforming dreams into reality. Our real estate development services focus on creating exceptional residential and commercial properties tailored to meet your unique needs.",
      icon: "./development-plan.png", // Replace with the actual icon/image path
    },
    {
      title: "Building Construction",
      description:
        "Our building construction services are rooted in excellence, precision, and innovation. Whether it’s constructing luxury homes, high-rise buildings, or custom-designed projects, we bring your vision to life with unmatched expertise.",
      icon: "./hook.png", // Replace with the actual icon/image path
    },
    {
      title: "Project Management",
      description: "At De Vegas Luxury Homes and Properties, we offer comprehensive project management services designed to streamline every phase of your development journey. We partner with reputable real estate companies to develop exquisite properties, ensuring the satisfaction of end users.",
      icon: "./clipboard.png", // Replace with the actual icon/image path
    },
  ];

  return (
    <section
      className={`services-section ${isVisible ? "animate" : ""}`}
      id="services"
      ref={sectionRef}
    >
      <h2 className="services-heading">Our Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className={`service-card`} key={index}>
            <img
              src={service.icon}
              alt={`${service.title} Icon`}
              className="service-icon"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
