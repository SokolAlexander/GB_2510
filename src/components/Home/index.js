import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import { Buttons } from "../Buttons";
import { SignForm } from "../SignForm";

import "./styles.css";

export const Home = () => {
  // const dispatch = useDispatch();
  // const name = useSelector((state) => state.name);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (email, pass) => {
    setLoading(true);
    try {
      await logIn(email, pass);
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3>HOME</h3>
      {/* <h4>HELLO {name}</h4> */}
      <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
      <Link to="/signup">Sign Up</Link>
      <Buttons />
    </>
  );
};
