import './styles/main.scss'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index'
import { faCircleRight, faPlus, faBars, faMessage } from '../../node_modules/@fortawesome/free-solid-svg-icons/index'

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
          <div className='logo'>
            <span>VoiceGPT</span>
          </div>
          <div className='chatgpt-answears'>
            <div className='user-color background'>
              <div className='text'>
                <div className='avatar'>
                  <img src="https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F70aecedf3e956cb10b3abc299608b1af%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fth.png&w=48&q=75" alt="" height={36}/>
                </div>
                  <div className='user-text'>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
            </div>
            <div className='bot-color background'>
              <div className='text'>
                <div className='avatar'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="" height={36}/>
                </div>
                <div className='user-text'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ipsum, perferendis laborum quas, accusamus tempore aut obcaecati dolorem quod sunt doloremque. Rerum repellendus tempora, repudiandae odio illo laboriosam mollitia modi aut nobis culpa aliquam.</p>
                </div>
              </div>     
            </div>
            <div className='user-color background'>
              <div className='text'>
                <div className='avatar'>
                  <img src="https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F70aecedf3e956cb10b3abc299608b1af%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fth.png&w=48&q=75" alt="" height={36}/>
                </div>
                  <div className='user-text'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, beatae?</p>
                  </div>
              </div>
            </div>
            <div className='bot-color background'>
              <div className='text'>
                <div className='avatar'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="" height={36}/>
                </div>
                <div className='user-text'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod. Numquam excepturi commodi eveniet laudantium accusamus officia dicta saepe repellendus?</p>
                </div>
              </div>     
            </div>
            <div className='user-color background'>
              <div className='text'>
                <div className='avatar'>
                  <img src="https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F70aecedf3e956cb10b3abc299608b1af%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fth.png&w=48&q=75" alt="" height={36}/>
                </div>
                  <div className='user-text'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio recusandae qui?</p>
                  </div>
              </div>
            </div>
            <div className='bot-color background'>
              <div className='text'>
                <div className='avatar'>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="" height={36}/>
                </div>
                <div className='user-text'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi assumenda, reprehenderit unde iusto amet eos. Itaque laboriosam quam facere commodi eaque. Omnis eligendi sunt soluta, qui eius facilis sapiente fugit aut similique dolore consequatur dicta repellendus consequuntur eum ut debitis tempore ipsam! Minima reiciendis ullam incidunt.</p>
                </div>
              </div>     
            </div>
          </div>
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