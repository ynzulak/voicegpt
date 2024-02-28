import  ChatHandler  from "./ChatHandler";
import History from "./History";
import Responses from "./Responses";
import BurgerComponent from "./BurgerComponent";
import SpeechComponent from "./SpeechComponent";
import SpeechToText from "./SpeechToText";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCircleRight, faVolumeHigh } from '../node_modules/@fortawesome/free-solid-svg-icons/index'
import { useChat } from "./ChatContext";
import { useEffect } from "react";
import LanguageComponent from "./LanguageComponent";

const Submit = () => {
  const { inputMessage, setInputMessage, handleMessageSubmit, } = ChatHandler();

  const { 
    isSpeech,
    transcript, 
    setTranscript,
  } = useChat()

  useEffect(() => {
    if (isSpeech && transcript) {
      setInputMessage(transcript);
    }
    if (!isSpeech && transcript) {
      handleMessageSubmit();
    }
  }, [isSpeech, transcript, setInputMessage]);

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleMessageSubmit();
    }
  };

  const handleInputChange = (e: any) => {
    if (!isSpeech) {
      setInputMessage(e.target.value);
    } else {
      setTranscript(e.target.value);
    }
  };
  

  return (
    <>
    <History />
    <div className='text-container'>
    <BurgerComponent/>
    <SpeechComponent/>
    <LanguageComponent/>
    <Responses />
      <div className='user-container'>
        <div className='type-bar'>
        <SpeechToText />
          <div className='user-text'>
            <input className='user-text' type='text' placeholder='Start typing...' value={isSpeech ? transcript : inputMessage} onChange={handleInputChange}
            onKeyPress={handleKeyPress}/>
          </div>
          <div className='submit' onClick={handleMessageSubmit}><FontAwesomeIcon icon={faCircleRight} className='submit'/></div>
        </div>
      </div>
    </div>
    </>
        );
        
}


export default Submit