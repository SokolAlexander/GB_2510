import React from "react";
import { useSelector } from "react-redux";

import "./styles.css";

export const Home = () => {
  const name = useSelector((state) => state.name);

  return (
    <>
      <h3>HOME</h3>
      <h4>HELLO {name}</h4>
    </>
  );
};
