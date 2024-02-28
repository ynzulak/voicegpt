import { useChat } from "./ChatContext";
import { Spin as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {  faPlus, faMessage, faXmark } from '../node_modules/@fortawesome/free-solid-svg-icons/index'
import { CSSTransition } from 'react-transition-group';
import { useState } from "react";




const History = () => {
    const { isOpen, setIsOpen, previousChats, setInputMessage, setResponseMessage, setCurrentTitle } = useChat()


    const uniqueTitles: string[] = Array.from(new Set(previousChats.map((previousChat: { title: any; }) => previousChat.title)))

    const createNewChat = () => {
        setResponseMessage(null)
        setInputMessage('')
        setCurrentTitle(null)
    }
    const handleClick = (uniqueTitle: string) => {
        setCurrentTitle(uniqueTitle)
        setResponseMessage(null)
        setInputMessage('')
    }


    const handleClose = () => {
      setIsOpen(false)
    }
    
    return (
        <div className="menu-container">
            <div className="close-button">
                <FontAwesomeIcon icon={faXmark} onClick={handleClose}/>
            </div>
            <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                >
                <div className='history-container'>
                    <div className='new-message'>
                        <div onClick={createNewChat} className='new new-message-element'>
                            <div className='plus'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <span>New message</span>
                        </div>
                    </div>
                    {uniqueTitles?.map((uniqueTitle, index) => <div className='history' key={index} onClick={() => handleClick(uniqueTitle)}>
                        <div className='fa-message'>
                            <FontAwesomeIcon icon={faMessage} />
                        </div>
                        <span>    {uniqueTitle && uniqueTitle.length > 25 ? (
                            `${uniqueTitle.slice(0, 20).charAt(0).toUpperCase() + uniqueTitle.slice(1)}...`
                        ) : (
                            uniqueTitle.charAt(0).toUpperCase() + uniqueTitle.slice(1)
                        )}
                        </span>
                    </div>
                    )}
                </div>
            </CSSTransition>
        </div>
    )
    }
    
    export default History;