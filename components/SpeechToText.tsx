import { useState } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  let recognition = null;

  const startListening = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      
      recognition.onresult = event => {
        const currentTranscript = event.results[0][0].transcript;
        setTranscript(currentTranscript);
      };

      recognition.start();
    } else {
      console.log("Przeglądarka nie obsługuje rozpoznawania mowy.");
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  console.log(transcript);

  return (
    <div>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText