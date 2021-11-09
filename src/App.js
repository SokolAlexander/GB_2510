import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { ChatList } from "./components/ChatList";
import Chats from "./components/Chats";
import { Home } from "./components/Home";

export const App = () => (
  <BrowserRouter>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/chats">Chats</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="chats">
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<Chats />} />
      </Route>
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
);
