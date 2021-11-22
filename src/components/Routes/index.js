import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { Articles } from "../Articles";
import { ChatList } from "../ChatList";
import { ConnectedChats } from "../Chats";
import { Home } from "../Home";
import { PrivateRoute } from "../PrivateRoute";
import { ConnectedProfile } from "../Profile";
import { PrivateOutlet, PublicRoute } from "../PublicRoute";

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
      <li>
        <Link to="/articles">Articles</Link>
      </li>
    </ul>

    <Routes>
      <Route path="/" element={<PrivateOutlet />}>
        <Route path="" element={<Home />} />
      </Route>
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <ConnectedProfile />
          </PrivateRoute>
        }
      />
      <Route path="articles" element={<Articles />} />
      <Route path="chats">
        <Route
          index
          element={
            <PrivateRoute>
              <ChatList />
            </PrivateRoute>
          }
        />
        <Route
          path=":chatId"
          element={
            <PrivateRoute>
              <ConnectedChats />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<h3>404</h3>} />
    </Routes>
  </BrowserRouter>
);
