import React from "react";

export const Message = ({ message }) => {
  return (
    <div>
      <span>{message.author}:</span>
      <span>{message.text}</span>
    </div>
  );
};
