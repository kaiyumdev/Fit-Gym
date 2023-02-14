import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMedia from "../SocialMedia/SocialMedia";
import auth from "./../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let location = useLocation();

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);
  let from = location.state?.from?.pathname || "/checkout";
  const navigate = useNavigate();

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
    return  <Loading></Loading>
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };

  const handlePasswordReset = async () => {
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast("Send Reset Password!");
  };

  return (
    <div className="w-50 mx-auto">
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <button type="submit" className="btn btn-outline-info">
          Submit
        </button>
      </Form>
      <p>
        New to Fit-Gym ?{" "}
        <Link className="btn btn-outline-info" to={"/registration"}>
          Please Register
        </Link>
      </p>
      <p>
        Forget Password ?
        <button
          onClick={handlePasswordReset}
          type="submit"
          className="btn btn-outline-info"
        >
          Reset Password
        </button>
      </p>
      <SocialMedia></SocialMedia>
      <ToastContainer />
    </div>
  );
};

export default Login;
