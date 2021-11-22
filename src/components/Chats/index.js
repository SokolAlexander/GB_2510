import { useCallback, useEffect, useMemo } from "react";
import { Form } from "../Form/Form";
import { MessageList } from "../MessageList/MessageList";
import { AUTHORS } from "../../utils/constants";
import { Button } from "../Button";

import "./Chats.css";
import { ChatList } from "../ChatList";
import { Navigate, useParams } from "react-router";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  createSelectMessagesForChat,
  selectMessages,
  selectMessagesForChat,
} from "../../store/messages/selectors";
import { addMessageWithReply } from "../../store/messages/actions";

function Chats({ messages, sendMessage }) {
  const { chatId } = useParams();

  // const messages = useSelector(selectMessages);
  // const selectMessagesForMyChat = useMemo(
  //   () => createSelectMessagesForChat(chatId),
  //   [chatId]
  // );

  // const messagesForCurrentChat = useSelector(selectMessagesForMyChat);
  // const dispatch = useDispatch();

  const handleSendMessage = useCallback(
    (newMessage) => {
      // dispatch(addMessage(chatId, newMessage));
      sendMessage(chatId, newMessage);
    },
    [chatId, sendMessage]
  );

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="App">
      <ChatList />
      <div>
        <Button draw={(text) => <span>{text}</span>} />
        <MessageList messages={messages[chatId]} />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default Chats;

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  sendMessage: addMessageWithReply,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
