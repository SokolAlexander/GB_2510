import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

const chatList = [
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

export const ChatList = () => {
  return (
    <div>
      <h3>List of chats</h3>
      <ul>
        {chatList.map((chat) => (
          <>
            <li>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={`/chats/${chat.id}`}
              >
                {chat.name}
              </NavLink>
            </li>
            <button onClick={() => {}}>delete</button>
          </>
        ))}
      </ul>
      <TextField value="" onChange={() => {}} />
      <button>Add chat</button>
    </div>
  );
};
