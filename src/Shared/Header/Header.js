import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { Button } from "react-bootstrap/Button";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <nav className="navbar bg-dark sticky-top py-4">
        <div className="nav">
          <Link to={"/"}>Fit-Gym</Link>
          <Link to={"/home"}>Home</Link>
          <Link to="#Services">Services</Link>
          <Link to="#banner">Banner</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about"}>About</Link>
        </div>
        <div className="nav">
          <Link to={"/registration"}>Registration</Link>
          {user ? (
            <button onClick={handleLogOut}>Log Out</button>
          ) : (
            <Link to={"/login"}>Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
