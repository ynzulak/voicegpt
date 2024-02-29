import { useState } from "react";
import { useChat } from "./ChatContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faPlus, faMessage, faBars } from '@fortawesome/free-solid-svg-icons'



const BurgerComponent = () => {
    const { isOpen, setIsOpen} = useChat()

    const handleClick = () => {
      setIsOpen(true)
    }

    return (
        <div className="burger-container">
            <div className='speech-icon' onClick={handleClick}>
                <FontAwesomeIcon icon={faBars} onClick={handleClick}/>
            </div>
        </div>
    )
    }
    
    export default BurgerComponent;