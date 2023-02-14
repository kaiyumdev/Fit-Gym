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
    <div className="service-container">
      <div className="service py-3" gap={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" width={400} src={img} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>$ {price}</Card.Text>
            <Button
             className="btn btn-outline-info"
              onClick={() => navigateServiceDetail(id)}
            >
              Go to CheckOut
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Service;
