import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("Services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div id="Services" className="services">
      {services.map((service) => (
        <Service service={service} key={service.id}></Service>
      ))}
    </div>
  );
};

export default Services;
