import { useCallback, useEffect, useRef, useState } from "react";
import { Message } from "./components/Message/Message";
import { Counter } from "./components/Counter/Counter";
import "./App.css";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";
import { AUTHORS } from "./utils/constants";

const initialMessages = [
  {
    text: "text1",
    author: AUTHORS.human,
  },
];

function App() {
  const [messages, setMessages] = useState(initialMessages);
  const parentRef = useRef();

  const handleSendMessage = useCallback((newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }, []);

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].author !== AUTHORS.bot
    ) {
      const timeout = setTimeout(
        () =>
          handleSendMessage({
            author: AUTHORS.bot,
            text: "i am a bot",
            id: `mes-${Date.now()}`,
          }),
        1500
      );

      return () => clearTimeout(timeout);
    }
  }, [messages]);

  return (
    <div className="App" ref={parentRef}>
      <div>
        <h3>List of chats</h3>
        <ul>
          <li>Chat 1</li>
          <li>Chat 2</li>
          <li>Chat 3</li>
        </ul>
      </div>
      <div>
        <MessageList messages={messages} />
        <Form onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default App;

// optional chainging
