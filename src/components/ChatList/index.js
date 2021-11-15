import { TextField, ListItem, List } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ChatItem } from "../ChatItem";

export const ChatList = ({ chatList, onAddChat, onDeleteChat }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddChat(value);

    setValue("");
  };

  return (
    <div>
      <h3>List of chats</h3>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <ChatItem chat={chat} onDeleteChat={onDeleteChat} />
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} />
        <button>Add chat</button>
      </form>
    </div>
  );
};
