import './styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight, faPlus, faBars, faMessage} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div className='container'>
      <div className='history-container'>
        <div className='new-message'>
          <div className='new new-message-element'><div className='plus'><FontAwesomeIcon icon={faPlus} /></div><span>New message</span></div>
          <div className='hide new-message-element'><span><FontAwesomeIcon icon={faBars} /></span></div>
        </div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Problem 1</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Problem jakiś</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
      </div>
      <div className='text-container'>
        <div className='chatgpt-container'>
          <div className='logo'><span>VoiceGPT</span>
        </div>
          <div className='chatgpt-answears'></div>
        </div>
        <div className='user-container'>
          <div className='type-bar'>
            <div className='user-text'><input className='user-text' type='text' placeholder='Start typing...'></input></div>
            <div className='user-enter'><FontAwesomeIcon icon={faCircleRight} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}