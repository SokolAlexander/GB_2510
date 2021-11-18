import { ListItem } from "@mui/material";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { deleteChat } from "../../store/chats/actions";

export const ChatItem = ({ chat }) => {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(deleteChat(chat.id));
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
