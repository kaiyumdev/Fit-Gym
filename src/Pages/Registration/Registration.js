import React from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import auth from "./../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSendPasswordResetEmail,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import { sendEmailVerification } from "firebase/auth";
const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, profileError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    navigate("/home");
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log(name);
  };

  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" id="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" id="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" id="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        Already Register? <Link to={"/login"}>Please Login</Link>{" "}
      </p>
      <SocialMedia></SocialMedia>
    </div>
  );
};

export default Registration;
