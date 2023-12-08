import  ChatHandler  from "./ChatHandler";
import History from "./History";
import Responses from "./Responses";
import SpeechComponent from "./SpeechComponent";
import SpeechToText from "./SpeechToText";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCircleRight, faVolumeHigh } from '../node_modules/@fortawesome/free-solid-svg-icons/index'

const Submit = () => {
  const { inputMessage, setInputMessage, handleMessageSubmit} = ChatHandler();
  
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleMessageSubmit();
    }
  };

  return (
    <>
    <History />
    <div className='text-container'>
    <SpeechComponent/>
    <Responses />
    <SpeechToText />
      <div className='user-container'>
        <div className='type-bar'>
          <div className='user-text'>
            <input className='user-text' type='text' placeholder='Start typing...' value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}
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