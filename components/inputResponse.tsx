import { useState } from "react";

import sendMessageToChatGPT from "./sendMessage";

type MessageType = {
  text: string;
  isUser: boolean;
};

function inputResponse() {
    const [inputMessage, setInputMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [messages, setMessages] = useState<MessageType[]>([]);
  
    const handleMessageSubmit = async () => {
      const response = await sendMessageToChatGPT(inputMessage);
      setResponseMessage(response);
      setMessages([...messages, { text: inputMessage, isUser: true }, { text: response, isUser: false }],);
    };
  return { inputMessage, setInputMessage, responseMessage, setResponseMessage, handleMessageSubmit, messages, setMessages};
}
export default inputResponse;