import './styles/main.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight} from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  return (
    <div className='container'>
      <div className='history-container'>
        <div className='history'>1</div>
        <div className='history'>2</div>
        <div className='history'>3</div>
      </div>
      <div className='text-container'>
        <div className='chatgpt-container'>
          <div className='logo'><span>VoiceGPT</span>
        </div>
          <div className='chatgpt-answears'></div>
        </div>
        <div className='user-container'>
          <div className='type-bar'>
            <div className='user-text'>teskt twoj chatu</div>
            <div className='user-enter'><FontAwesomeIcon icon={faCircleRight} /></div>
          </div>
        </div>
      </div>
    </div>
  )
}
