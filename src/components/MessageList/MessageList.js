import React, { useEffect } from "react";

export const MessageList = ({ messages }) => {
  useEffect(() => {
    console.log("messageList did mount");

    return () => console.log("messageList will unmount");
  }, []);

  return (
    <div>
      {messages.map((mes) => (
        <div key={mes.id}>
          <span>{mes.author}</span>: <span>{mes.text}</span>
        </div>
      ))}
    </div>
  );
};
