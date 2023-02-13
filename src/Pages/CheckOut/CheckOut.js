import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { checkOutId } = useParams();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>CheckOut ID: {checkOutId}</h1>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Please CheckOut
        </Button>
      </Form>
    </div>
  );
};

export default CheckOut;
