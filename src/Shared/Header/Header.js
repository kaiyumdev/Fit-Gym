import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
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
    <div className="header">
      <nav className="navbar bg-dark sticky-top">
        <div className="nav">
          <Link to={"/"}>Fit-Gym</Link>
          <Link to={"/home"}>Home</Link>
          <NavLink to="#services">Services</NavLink>
          <Link to="#banner">Banner</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/about"}>About</Link>
        </div>
        <div className="nav">
          {user ? (
            <Link className="log-out gradient-button" onClick={handleLogOut}>
              Log Out
            </Link>
          ) : (
            <Link className="gradient-button" to={"/login"}>Login</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
