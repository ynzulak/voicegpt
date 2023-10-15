import { useState } from "react";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCircleRight } from "../node_modules/@fortawesome/free-solid-svg-icons/index";

import sendMessageToChatGPT from "./sendMessage";

const Submit = () => {

    const [inputMessage, setInputMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleMessageSubmit = async () => {
      const response: any = await sendMessageToChatGPT(inputMessage);
      setResponseMessage(response);
    };
    return (
        
        <div className='user-container'>
        <div className='type-bar'>
          <div className='user-text'>
            <input className='user-text' type='text' placeholder='Start typing...' value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}/>
          </div>
          <div className='submit' onClick={handleMessageSubmit}><FontAwesomeIcon icon={faCircleRight} /></div>
          <div>{responseMessage}</div>
        </div>
      </div>
        
    );
    
}


export default Submit