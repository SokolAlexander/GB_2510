import React, { useState } from "react";

export const Input = ({ render }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return render({ value, handleChange });
};
