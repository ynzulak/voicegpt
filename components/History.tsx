import { useChat } from "./ChatContext";
import { Spin as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {  faPlus, faMessage, faXmark } from '../node_modules/@fortawesome/free-solid-svg-icons/index'
import { CSSTransition } from 'react-transition-group';
import { useState } from "react";
import HistoryComponent from "./HistoryComponent";




const History = () => {
    const { isOpen, setIsOpen } = useChat()


    const handleClose = () => {
      setIsOpen(false)
    }
    
    

    return (
        <div className="menu-container">
            <div className="burger-menu">
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                    >
                <div className="close-button">
                    <FontAwesomeIcon icon={faXmark} onClick={handleClose}/>
                </div>
                </CSSTransition>
                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                    >
                <HistoryComponent />
                </CSSTransition>
            </div>
            <div className="menu-big">
                <HistoryComponent />
            </div>
        </div>
    )
    }
    
    export default History;