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

  const changeLanguage = (language: string) => {
    setLanguage(language)
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
        (<div className="language-modal">
            <div className="modal-text">
                <p>Select language</p>
                <div className="languages">
                <div onClick={() => changeLanguage('polish')}><p>Polish</p></div>
                <div onClick={() => changeLanguage('english')}><p>English</p></div>
                </div>
            </div>
            <button className="ok-button" onClick={closeModal}>Ok</button>
      </div>)}
    </div>
    </>
  );
};

export default LanguageComponent;
