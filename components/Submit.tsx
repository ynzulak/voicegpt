import  ChatHandler  from "./ChatHandler";
import History from "./History";
import Responses from "./Responses";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCircleRight } from '../node_modules/@fortawesome/free-solid-svg-icons/index'
import TextToSpeech from "./TextToSpeech";

const Submit = () => {
  const { inputMessage, setInputMessage, handleMessageSubmit} = ChatHandler();
  
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleMessageSubmit();
      TextToSpeech()
    }
  };

  return (
    <>
    <History />
    <div className='text-container'>
    <Responses />
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