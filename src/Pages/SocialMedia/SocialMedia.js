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
  return (
    <div className="social-container">
      <div className="login">
        <button  className="btn btn-outline-info" onClick={() => signInWithGoogle()}>Sign In with Google</button>
      </div>
    </div>
  );
};

export default SocialMedia;
