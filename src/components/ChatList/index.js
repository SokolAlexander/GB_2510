import { TextField, ListItem, List } from "@mui/material";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../utils/ThemeContext";

export const ChatList = ({ chatList, color }) => {
  // const { color } = useContext(ThemeContext);

  return (
    <div>
      <h3>List of chats</h3>
      <ul>
        {chatList.map((chat) => (
          <>
            <ListItem>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={`/chats/${chat.id}`}
              >
                {chat.name}
              </NavLink>
            </ListItem>
            <button onClick={() => {}}>delete</button>
          </>
        ))}
      </ul>
      <TextField value="" onChange={() => {}} />
      <button style={{ backgroundColor: color }}>Add chat</button>
    </div>
  );
};

const withThemeContext = (Component) => {
  return (props) => {
    console.log("ChatList");
    const { color } = useContext(ThemeContext);

    return <Component color={color} {...props} />;
  };
};

export default withThemeContext(ChatList);

const objA = {
  x: 1,
  y: 2
}

const foo = (someObj) => {
  console.log(someObj.y);
}

foo({y: 3, ...objA});
