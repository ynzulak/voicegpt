import { createContext, useContext, useState } from 'react';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [isOpen, setIsOpen ] = useState(false)
  const [inputMessage, setInputMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const [previousChats, setPreviousChats] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSpeech, setIsSpeech] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [noSupport, setNoSupport] = useState('');
  const [showModal, setShowModal] = useState(true);
  const [noLanguage, setNoLanguage] = useState(true);
  const [language, setLanguage] = useState('');

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
    isSpeech, 
    setIsSpeech,
    transcript, 
    setTranscript,
    noSupport, 
    setNoSupport,
    showModal, 
    setShowModal, 
    language, 
    setLanguage,
    noLanguage, 
    setNoLanguage,
    isOpen,
    setIsOpen 
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