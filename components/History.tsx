import { useChat } from "./ChatContext";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {  faPlus, faBars, faMessage } from '../node_modules/@fortawesome/free-solid-svg-icons/index'


const History = () => {
    const { inputMessage, previousChats, setInputMessage, setResponseMessage, setCurrentTitle, responseMessage } = useChat();


    const uniqueTitles = Array.from(new Set(previousChats.map((previousChat: { title: any; }) => previousChat.title[0].toUpperCase() + previousChat.title.slice(1))))

    
    const createNewChat = () => {
        setResponseMessage(null)
        setInputMessage('')
        setCurrentTitle(null)
    }
    const handleClick = (uniqueTitle) => {
        setCurrentTitle(uniqueTitle)
        setResponseMessage(null)
        setInputMessage('')
    }
    console.log(uniqueTitles);

    return (
    <div className='history-container'>
        <div className='new-message'>
            <div onClick={createNewChat} className='new new-message-element'>
                <div className='plus'>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <span>New message</span>
            </div>
            <div className='new-message-element'>
                <span>
                    <FontAwesomeIcon icon={faBars} />
                </span>
            </div>
        </div>
        {uniqueTitles?.map((uniqueTitle, index) =>
            <div className='history' key={index} onClick={() => handleClick(uniqueTitle)}>
                <div className='fa-message'>
                    <FontAwesomeIcon icon={faMessage} />
                </div>
                <span>{uniqueTitle}</span>
            </div>
            )
        }
    </div>
    )
    }
    
    export default History;