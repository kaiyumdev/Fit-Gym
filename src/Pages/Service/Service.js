import React from "react";
import "./Service.css";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();

  const navigateServiceDetail = (checkOutId) => {
    navigate(`/service/${checkOutId}`);
  };
  return (
    <div className="container">
      <div id="service" className="service" gap={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" width={400} src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Button variant="primary" onClick={() => navigateServiceDetail(id)}>
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Service;
