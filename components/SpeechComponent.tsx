import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons'

import { useChat } from "./ChatContext";

const SpeechComponent = () => {
    const [isSpeech, setIsSpeech] = useState(false)

    const {
        responseMessage,
      } = useChat();

    const handleClick = () => {
      setIsSpeech(!isSpeech)
    }

    const handleTextToSpeech = async () => {
    try {
      if (responseMessage) {
            const utterance = new SpeechSynthesisUtterance(responseMessage);
            window.speechSynthesis.speak(utterance);
          }
        } catch (error) {
          console.error('Error occurred while processing Text-to-Speech:', error);
        }
      };

      useEffect(() => {
        if (!isSpeech){
          handleTextToSpeech()
        }
      },[responseMessage])

return (
    <>
    <div className="speech-container">
        <div className='speech-icon' onClick={handleClick}>
          {isSpeech ?
            <FontAwesomeIcon icon={faVolumeXmark} /> : <FontAwesomeIcon icon={faVolumeHigh}/>}
        </div>
    </div>
    </>
)
}

export default SpeechComponent