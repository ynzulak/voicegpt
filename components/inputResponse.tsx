import { useEffect, useState } from "react";
import {useChat}  from './ChatContext';

type MessageType = {
  title: string;
  content: string;
  role: string;
};

function inputResponse() {
  const {
    inputMessage,
    setInputMessage,
    responseMessage,
    setResponseMessage,
    previousChats,
    setPreviousChats,
    currentTitle,
    setCurrentTitle,
    loading,
    setLoading,
  } = useChat();
  
  const [currentChatHistory, setCurrentChatHistory] = useState<MessageType[]>([])

    const API_KEY = process.env.NEXT_PUBLIC_CHAT_GPT
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    
        
    const sendMessageToChatGPT = async (message: string | null, chatHistory: MessageType[]) => {
      const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      };
    
      const messagesWithHistory = [
        ...chatHistory.map((chat: MessageType) => ({
          role: chat.role,
          content: chat.content,
        })),
        { role: 'user', content: message },
      ];
    
      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: messagesWithHistory,
        }),
      };
    
      try {
        setLoading(true);
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        console.log(data.choices[0].message.content);
        setLoading(false);
        return data.choices[0].message.content;
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    };

    const handleMessageSubmit = async () => {
      const chatHistory: MessageType[] = [
        ...previousChats,
        { role: 'user', content: inputMessage },
      ];

      const response = await sendMessageToChatGPT(inputMessage, chatHistory);
      setResponseMessage(response);
    
      if (!currentTitle && inputMessage && response) {
        setCurrentTitle(inputMessage);
      }
      
  if (currentTitle && inputMessage && response) {
    setPreviousChats((prevChats: any) => [
      ...prevChats,
      ...chatHistory,
      { title: currentTitle, role: 'assistant', content: response },
    ]);
  }

  setCurrentChatHistory(chatHistory);
    };
    
    useEffect(() => {
      if(!currentTitle && inputMessage && responseMessage) {
        setCurrentTitle(inputMessage)
      }
      if(currentTitle && inputMessage && responseMessage) {
        setPreviousChats((prevMessages: any) => (
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