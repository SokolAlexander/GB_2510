import React, { useEffect } from "react";

export const MessageList = ({ messages }) => (
  <div>
    {messages.map((mes) => (
      <div key={mes.id}>
        <span>{mes.author}:</span><span>{mes.text}</span>
      </div>
    ))}
  </div>
);
