import { useEffect, useState } from "react";

import sendMessageToChatGPT from "./sendMessage";

type MessageType = {
  text: string;
  isUser: boolean;
};

const API_KEY = process.env.NEXT_PUBLIC_CHAT_GPT
const API_URL = 'https://api.openai.com/v1/chat/completions';

function inputResponse() {
    const [inputMessage, setInputMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [previousChats, setPreviousChats] = useState<MessageType[]>([]);
    const [currentTitle, setCurrentTitle] = useState([])
  
    const handleMessageSubmit = async () => {
      const headers = {
        'Authorization': `Bearer ${API_KEY}`, 
        'Content-Type': 'application/json',
    };
    
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ 
          model: 'gpt-3.5-turbo',
          message: inputMessage,
          max_tokens: 100,
        }),
      };
  
      try {
          const response = await fetch(API_URL, requestOptions)
          const data = await response.json()
          console.log(data);
          console.log(data.choices[0].message);
          setResponseMessage(data.choices[0].message)
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(() => {
      console.log(currentTitle, inputMessage, responseMessage);
      if(!currentTitle && inputMessage && responseMessage) {
        setCurrentTitle(inputMessage)
      }
      if(currentTitle && inputMessage && responseMessage) {
        setPreviousChats(prevMessages => (
          [...prevMessages, 
            { title: currentTitle, role: 'user',  content: inputMessage},
            { title: currentTitle, role: responseMessage.role, content: responseMessage.content }]
        ),)
      }
    }, [responseMessage, currentTitle])
    console.log(previousChats);
  return { inputMessage, setInputMessage, responseMessage, setResponseMessage, handleMessageSubmit, previousChats, setPreviousChats};
}
export default inputResponse;