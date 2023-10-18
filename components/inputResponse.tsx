import { useState } from "react";

import sendMessageToChatGPT from "./sendMessage";

function inputResponse() {
    const [inputMessage, setInputMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleMessageSubmit = async () => {
      const response = await sendMessageToChatGPT(inputMessage);
      setResponseMessage(response);
    };

  return { inputMessage, setInputMessage, responseMessage, setResponseMessage, handleMessageSubmit };
}
export default inputResponse;