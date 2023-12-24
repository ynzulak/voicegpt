import { useEffect, useState } from "react";
import { useChat } from "./ChatContext";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import { faLanguage } from '../node_modules/@fortawesome/free-solid-svg-icons/index'

const LanguageComponent = () => {

  const { 
    language, 
    setLanguage,
    noLanguage
  } = useChat()

  const [showModal, setShowModal] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);;

  const changeLanguage = (language: string) => {
    setLanguage(language)
    setSelectedLanguage(language)
  }

  const handleClick = () => {
      setShowModal(true)
  }
  const closeModal = () => {
      setShowModal(false);
    };
  

  return (
    <>
    <div className="lang-container">
        <div className='lang-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={faLanguage} /> 
        </div>
        {showModal &&
        (    <div className="language-modal">
        <div className="modal-text">
          <div className="modal-title">
            <p>Select language</p></div>
            <div className="languages">
            <div
              className={
                selectedLanguage === "polish"
                  ? "language-active language"
                  : "language"
              }
              onClick={() => changeLanguage("polish")}
            >
              <p>Polish 🇵🇱</p>
            </div>
            <div
              className={
                selectedLanguage === "english"
                  ? "language-active language"
                  : "language"
              }
              onClick={() => changeLanguage("english")}
            >
              <p>English 🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
            </div>
          </div>
        </div>
        <div className="close-modal">
          <button className="ok-button" onClick={closeModal}>Ok</button>
        </div>
  </div>)}
          </div>
    </>
  );
};

export default LanguageComponent;
