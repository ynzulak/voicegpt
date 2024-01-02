import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

import { useChat } from "./ChatContext";

const SpeechComponent = () => {
    const [isSpeech, setIsSpeech] = useState(false)

    const {
        responseMessage,
        language,
        setNoLanguage,
        setShowModal,
      } = useChat();
      
    const handleClick = () => {
      if (language === '') {
        setNoLanguage(true);
        setShowModal(true); 
      } else {
        setIsSpeech(!isSpeech)
      }
    };

    const handleTextToSpeech = async () => {
    try {
      if (responseMessage) {
            const utterance = new SpeechSynthesisUtterance(responseMessage);
            if(language == 'english') {
              utterance.lang = 'en-US';
            }else if (language == 'polish'){
              utterance.lang = 'pl-PL'
            } else {
              utterance.lang = '';
            }
            window.speechSynthesis.speak(utterance);
          }
        } catch (error) {
          console.error('Error occurred while processing Text-to-Speech:', error);
        }
      };

      useEffect(() => {
        if (isSpeech){
          handleTextToSpeech()
        }
      },[responseMessage])

return (
    <>
    <div className="speech-container">
        <div className='speech-icon' onClick={handleClick}>
          {isSpeech ?
            <FontAwesomeIcon icon={faVolumeHigh} /> : <FontAwesomeIcon icon={faVolumeXmark}/>}
        </div>
    </div>
    </>
)
}

export default SpeechComponent