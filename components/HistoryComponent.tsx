import { useChat } from "./ChatContext";
import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {  faPlus, faMessage } from '../node_modules/@fortawesome/free-solid-svg-icons/index'
import { useState } from "react";




const HistoryComponent = () => {
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
        console.log(uniqueTitles)
    }


    const handleClose = () => {
      setIsOpen(false)
    }
    
    
    return (
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
                        <span className="unique-title"> {uniqueTitle && uniqueTitle.length > 25 ? (
                            `${uniqueTitle.slice(0, 20).charAt(0).toUpperCase() + uniqueTitle.slice(1)}...`
                        ) : (
                            `${uniqueTitle.charAt(0).toUpperCase() + uniqueTitle.slice(1)}`
                        )}
                    </span>
                </div>
                )}
            </div>
    )
}

export default HistoryComponent;