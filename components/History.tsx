import { useChat } from "./ChatContext";

import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {  faPlus, faBars, faMessage } from '../node_modules/@fortawesome/free-solid-svg-icons/index'


const History = () => {
    const {  previousChats, setInputMessage, setResponseMessage, setCurrentTitle } = useChat()

    const uniqueTitles = Array.from(new Set(previousChats.map((previousChat: { title: any; }) => previousChat.title)))

    
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
                <span>{(uniqueTitle.charAt(0).toUpperCase() + uniqueTitle.slice(1))}</span>
            </div>
            )
        }
    </div>
    )
    }
    
    export default History;