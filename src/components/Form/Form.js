import React, { useRef, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import { AUTHORS } from "../../utils/constants";

export const Form = ({ onSendMessage }) => {
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage({
      text: value,
      author: AUTHORS.human,
      id: `mes-${Date.now()}`,
    });

    inputRef.current?.focus();

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={value} onChange={handleChange} />

      <Button variant="outlined" type="submit">
        Send
      </Button>
    </form>
  );
};
