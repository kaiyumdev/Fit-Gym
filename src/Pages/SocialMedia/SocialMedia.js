import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import "./SocialMedia.css";
import auth from "./../../firebase.init";
const SocialMedia = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
//   console.log(user)
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
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <div className="social-container">
      <div
        style={{ height: "10px", width: "20px", color: "red", padding: "5px" }}
      ></div>
      or
      <div style={{ height: "1px" }}></div>
      <div className="login">
        <button onClick={() => signInWithGoogle()}>Sign In</button>
      </div>
    </div>
  );
};

export default SocialMedia;
