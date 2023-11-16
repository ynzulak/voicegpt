import { ReactElement, JSXElementConstructor, ReactNode, Key } from 'react';
import {useChat}  from './ChatContext';

const Responses = () => {
    const { previousChats, currentTitle} = useChat();
    
    const currentChat = previousChats.filter((previousChat: { title: any; }) => previousChat.title === currentTitle)

return (
    <div className='chatgpt-container'>
        {!currentTitle && <div className='logo'>
        <span>VoiceGPT</span>
        </div>}
        <div className='chatgpt-answears'>
            {currentChat?.map((chatMessage: { role: string; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; }, index: Key | null | undefined) =>
          <div
          key={index}
          className={chatMessage.role === 'user' ? 'user-color background' : 'bot-color background'}
        >
          <div className='text'>
            <div className='avatar'>
              <img
                src={
                  chatMessage.role === 'user'
                    ? 'https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F70aecedf3e956cb10b3abc299608b1af%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fth.png&w=48&q=75'
                    : 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
                }
                alt=''
                height={36}
              />
            </div>
            <div className='user-text'>
            <p>{chatMessage.role === 'user' ? chatMessage.content : chatMessage.content}</p>
            </div>
          </div>
        </div>
            )}
    </div>
  </div>
)
}

export default Responses;