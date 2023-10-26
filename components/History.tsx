import { FontAwesomeIcon } from "../node_modules/@fortawesome/react-fontawesome/index";
import {  faPlus, faBars, faMessage } from '../node_modules/@fortawesome/free-solid-svg-icons/index'


const History = ({inputMessage, setInputMessage, setResponseMessage, setCurrentTitle}: { inputMessage: string;}) => {

const createNewChat = () => {
    setResponseMessage(null)
    setInputMessage('')
    setCurrentTitle(null)
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
        <div className='history'>
            <div className='fa-message'>
                <FontAwesomeIcon icon={faMessage} />
            </div>
            <span>{inputMessage}</span>
        </div>
    </div>
    )
    }
    
    export default History;