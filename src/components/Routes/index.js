import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { ChatList } from "../ChatList";
import { ConnectedChats } from "../Chats";
import { Home } from "../Home";
import { ConnectedProfile } from "../Profile";

export const Router = () => (
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
        <Route index element={<ChatList />} />
        <Route path=":chatId" element={<ConnectedChats />} />
      </Route>
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
);
