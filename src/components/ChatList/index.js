import { TextField, ListItem, List } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { onValue, set } from "firebase/database";

import {
  addChat,
  addChatWithFb,
  initChatsTracking,
} from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { ChatItem } from "../ChatItem";
import {
  chatsRef,
  getChatMsgsRefById,
  getChatRefById,
} from "../../services/firebase";

export const ChatList = () => {
  const chatList = useSelector(selectChats);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(initChatsTracking());
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = `chat${Date.now()}`;
    dispatch(addChatWithFb({ name: value, id: newId }));
    setValue("");
  };

  return (
    <div>
      <h3>List of chats</h3>
      <ul>
        {chatList.map((chat) => (
          <li key={chat.id}>
            <ChatItem chat={chat} />
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
