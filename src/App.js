import React, { useCallback, useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ChatList } from "./components/ChatList";
import Chats from "./components/Chats";
import { Home } from "./components/Home";
import { ConnectedProfile, Profile } from "./components/Profile";
import { addChat, deleteChat } from "./store/chats/actions";

// const initialChatList = [
//   {
//     name: "chat1",
//     id: "chat1",
//   },
//   {
//     name: "chat2",
//     id: "chat2",
//   },
//   {
//     name: "chat3",
//     id: "chat3",
//   },
// ];

const initialMessages = {
  // chat1: [
  //   {
  //     text: "text1",
  //     author: AUTHORS.human,
  //     id: "mes1",
  //   },
  // ],
  // chat2: [
  //   {
  //     text: "this is chat2",
  //     author: AUTHORS.human,
  //     id: "mes2",
  //   },
  // ],
  // chat3: [],
};

export const App = () => {
  // const [chatList, setChatList] = useState(initialChatList);
  const chatList = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const [messages, setMessages] = useState(initialMessages);

  const handleAddChat = useCallback(
    (name) => {
      const newId = `chat${Date.now()}`;

      // setChatList((prevChatList) => [...prevChatList, ]);
      dispatch(addChat({ name, id: newId }));
      setMessages((prevMessages) => ({
        ...prevMessages,
        [newId]: [],
      }));
    },
    [dispatch]
  );

  const handleDeleteChat = useCallback((idToDelete) => {
    // setChatList((prevChatList) =>
    //   prevChatList.filter(({ id }) => id !== idToDelete)
    // );
    dispatch(deleteChat(idToDelete));
    setMessages((prevMessages) => {
      const newMessages = { ...prevMessages };
      delete newMessages[idToDelete];

      return newMessages;
    });
  }, []);

  return (
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
        <Route path="profile" element={<ConnectedProfile />} />
        <Route path="chats">
          <Route
            index
            element={
              <ChatList
                onAddChat={handleAddChat}
                onDeleteChat={handleDeleteChat}
                chatList={chatList}
              />
            }
          />
          <Route
            path=":chatId"
            element={
              <Chats
                chatList={chatList}
                messages={messages}
                setMessages={setMessages}
                onAddChat={handleAddChat}
                onDeleteChat={handleDeleteChat}
              />
            }
          />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  );
};
