import React, { useEffect } from "react";
import { Message } from "../Message/Message";

export const MessageList = ({ messages }) => (
  <div>
    {messages.map((mes) => (
      <Message key={mes.id} message={mes} />
    ))}
  </div>
);
