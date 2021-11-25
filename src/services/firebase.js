import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB78DsXlGnO3R7xXHySXB7VL631fbRiIYo",
  authDomain: "gb2511-948f9.firebaseapp.com",
  projectId: "gb2511-948f9",
  storageBucket: "gb2511-948f9.appspot.com",
  messagingSenderId: "1049450601543",
  appId: "1:1049450601543:web:6bc0b0a0cab39b16de6562",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
  await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
  await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, 'user');
export const chatsRef = ref(db, 'chats');
export const messagesRef = ref(db, 'messages');
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const getChatMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);
export const getChatMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
