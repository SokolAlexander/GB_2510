import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/profile/actions";

import "./styles.css";

export const Home = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.name);

  const handleClick = () => {
    dispatch(signIn());
  };

  return (
    <>
      <h3>HOME</h3>
      <h4>HELLO {name}</h4>
      <button onClick={handleClick}>SIGN IN</button>
    </>
  );
};
