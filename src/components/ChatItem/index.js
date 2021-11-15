import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";

export const ChatItem = ({ chat, onDeleteChat }) => {
  const handleDeleteClick = () => {
    onDeleteChat(chat.id);
  };

  return (
    <>
      <ListItem>
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
          to={`/chats/${chat.id}`}
        >
          {chat.name}
        </NavLink>
      </ListItem>
      <button onClick={handleDeleteClick}>delete</button>
    </>
  );
};
