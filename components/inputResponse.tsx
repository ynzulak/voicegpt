import { useEffect, useState } from "react";


type MessageType = {
  title: string;
  content: string;
  role: string;
};

function inputResponse() {
    const [inputMessage, setInputMessage] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);
    const [previousChats, setPreviousChats] = useState<MessageType[]>([]);
    const [currentTitle, setCurrentTitle] = useState(null)
    
    const API_KEY = process.env.NEXT_PUBLIC_CHAT_GPT
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    
    const sendMessageToChatGPT  = async (message: null) => {
      const headers = {
        'Authorization': `Bearer ${API_KEY}`, 
        'Content-Type': 'application/json',
    };
    
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ 
          model: 'gpt-3.5-turbo',
          messages: [
            {  role: 'user',  content: message}],
            max_tokens: 100,
        }),
      };
  
      try {
          const response = await fetch(API_URL, requestOptions)
          const data = await response.json()
          console.log(data);
          console.log(data.choices[0].message.content);
          return data.choices[0].message.content;
      } catch (error) {
        console.error(error)
      }
    };

    const handleMessageSubmit = async () => {
      const response = await sendMessageToChatGPT(inputMessage);
      setResponseMessage(response);
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
            { title: currentTitle, role: 'assistant', content: responseMessage}]
        ),)
      }
    }, [responseMessage, currentTitle])
    console.log(previousChats);
  return { inputMessage, setInputMessage, responseMessage, setResponseMessage, handleMessageSubmit, previousChats, setPreviousChats, currentTitle, setCurrentTitle};
}
export default inputResponse;