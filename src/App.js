import React, { useCallback, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ChatList from "./components/ChatList";
import Chats from "./components/Chats";
import { Home } from "./components/Home";
import { AUTHORS } from "./utils/constants";
import { ThemeContext } from "./utils/ThemeContext";
import { store } from "./store";
import { Profile } from "./components/Profile";

const initialChatList = [
  {
    name: "chat1",
    id: "chat1",
  },
  {
    name: "chat2",
    id: "chat2",
  },
  {
    name: "chat3",
    id: "chat3",
  },
];

const initialMessages = {
  chat1: [
    {
      text: "text1",
      author: AUTHORS.human,
    },
  ],
  chat2: [
    {
      text: "this is chat2",
      author: AUTHORS.human,
    },
  ],
  chat3: [],
};

export const App = () => {
  const [color, setColor] = useState("blue");

  const [chatList, setChatList] = useState(initialChatList);
  const [messages, setMessages] = useState(initialMessages);

  const handleToggleColor = useCallback(() => {
    setColor((prevColor) => (prevColor === "blue" ? "red" : "blue"));
  }, []);

  return (
    // <ThemeContext.Provider value={{ color, handleToggleColor }}>
    <Provider store={store}>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/chats">Chats</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chats">
            <Route index element={<ChatList chatList={chatList} />} />
            <Route
              path=":chatId"
              element={
                <Chats
                  chatList={chatList}
                  messages={messages}
                  setMessages={setMessages}
                />
              }
            />
          </Route>
          <Route path="*" element={<h3>404</h3>} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // </ThemeContext.Provider>
  );
};
