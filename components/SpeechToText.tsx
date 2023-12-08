import { useState } from "react";

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const recognition = new window.webkitSpeechRecognition(); // Tworzymy nową instancję rozpoznawania mowy

  recognition.lang = 'en-US'; // Ustawiamy język rozpoznawania (tu angielski amerykański)

  recognition.onresult = event => {
    const currentTranscript = event.results[0][0].transcript;
    setTranscript(currentTranscript); // Ustawiamy rozpoznany tekst w stanie komponentu
  };

  const startListening = () => {
    recognition.start(); // Rozpoczynamy nasłuchiwanie
  };

  const stopListening = () => {
    recognition.stop(); // Zatrzymujemy nasłuchiwanie
  };
console.log(transcript);
  return (
    <div>
      <button onClick={startListening}>Start</button>
      <button onClick={stopListening}>Stop</button>
      <p>{transcript}</p> {/* Wyświetlamy rozpoznany tekst */}
    </div>
  );
};
export default SpeechToText;