import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter, Link } from "react-router-dom";
import { onValue } from "firebase/database";

import { auth, messagesRef } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";
import { Articles } from "../Articles";
import { ChatList } from "../ChatList";
import { ConnectedChats } from "../Chats";
import { Home } from "../Home";
import { PrivateRoute } from "../PrivateRoute";
import { ConnectedProfile } from "../Profile";
import { PublicOutlet, PublicRoute } from "../PublicRoute";
import { SignUp } from "../SignUp";

export const Router = () => {
  const dispatch = useDispatch();
  const [msgs, setMsgs] = useState({});

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(signIn());
      } else {
        dispatch(signOut());
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const newMsgs = {};

      snapshot.forEach((chatMsgsSnap) => {
        newMsgs[chatMsgsSnap.key] = Object.values(
          chatMsgsSnap.val().messageList || {}
        );
      });

      setMsgs(newMsgs);
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
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/signup" element={<PublicOutlet />}>
          <Route path="" element={<SignUp />} />
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
                <ConnectedChats msgs={msgs} />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<h3>404</h3>} />
      </Routes>
    </BrowserRouter>
  );
};
