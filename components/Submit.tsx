import  inputResponse  from "./inputResponse";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faCircleRight } from "../node_modules/@fortawesome/free-solid-svg-icons/index";


const Submit = () => {
  const { inputMessage, setInputMessage, responseMessage, setResponseMessage, handleMessageSubmit } = inputResponse();
  
  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleMessageSubmit();
    }
  };

  return (
    <div className='user-container'>
        <div className='type-bar'>
          <div className='user-text'>
            <input className='user-text' type='text' placeholder='Start typing...' value={inputMessage} onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}/>
          </div>
          <div className='submit' onClick={handleMessageSubmit}><FontAwesomeIcon icon={faCircleRight} className='submit'/></div>
        </div>
      </div>
        
        );
        
}


export default Submit