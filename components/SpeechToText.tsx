import { useEffect, useState } from "react";
import { useChat } from "./ChatContext";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faMicrophone, faMicrophoneSlash} from '../node_modules/@fortawesome/free-solid-svg-icons/index'

const SpeechToText = () => {
  const { 
    isSpeech, 
    setIsSpeech,
    transcript, 
    setTranscript,
    noSupport, 
    setNoSupport,
    showModal, 
    setShowModal
  } = useChat()

  let recognition: any = null;

  const handleClick = () => {
    if (!isSpeech) {
      startListening();
    } else {
      stopListening();
    }
  };

  const startListening = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      
      recognition.onresult = (event: { results: { transcript: any; }[][]; }) => {
        const currentTranscript = event.results[0][0].transcript;
        setTranscript(currentTranscript);
      };

      recognition.onend = () => {
        setIsSpeech(false);
      };

      setIsSpeech(true)
      recognition.start();
    } else {
      setNoSupport("Your browser does not support speech recognition. Try using browser like Chrome or Safari");
    }
  };

  const stopListening = () => {
    setIsSpeech(false);
    if (recognition) {
      recognition.stop();
      recognition = null; 
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="speech-recognition">
      <div className="microphone" onClick={handleClick}>
        {isSpeech ? (
          <FontAwesomeIcon icon={faMicrophone} />
        ) : (
          <FontAwesomeIcon icon={faMicrophoneSlash} />
        )}
      </div>
      {noSupport && showModal &&(<div className="no-support-modal">
        <div className="modal-text">
          <p>Your browser does not support speech recognition. Try using browser like Chrome or Safari</p>
        </div>
        <button className="ok-button" onClick={closeModal}>Ok</button>
      </div>)}
    </div>
  );
};

export default SpeechToText;
