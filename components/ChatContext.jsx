import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const value = {
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
    chatHistory, 
    setChatHistory
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};