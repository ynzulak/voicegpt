import  inputResponse  from "./inputResponse";
import History from "./History";
import Responses from "./Responses";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCircleRight } from '../node_modules/@fortawesome/free-solid-svg-icons/index'

const Submit = () => {
  const { inputMessage, setInputMessage, responseMessage, handleMessageSubmit, previousChats, currentTitle, setCurrentTitle, setResponseMessage, setPreviousChats } = inputResponse();
  
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleMessageSubmit();
    }
  };

  const ChatAnswears = () => {
    return <Responses inputMessage={inputMessage} responseMessage={responseMessage}/>;
  };
  const ChatHistory = () => {
    return <History inputMessage={inputMessage} setInputMessage={setInputMessage} setCurrentTitle={setCurrentTitle} setResponseMessage={setResponseMessage}/>;
  };

  return (
    <>
    {ChatHistory()}
    <div className='text-container'>
      {ChatAnswears()}
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