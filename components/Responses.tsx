import  inputResponse  from "./inputResponse";

const Responses = ({ inputMessage, responseMessage}: { inputMessage: string; responseMessage: string }) => {

return (
    <div className='chatgpt-container'>
        <div className={responseMessage ? 'logo hidden' : 'logo'}>
        <span>VoiceGPT</span>
        </div>
        <div className={responseMessage ? 'chatgpt-answears': 'chatgpt-answears hidden'}>
        <div className='user-color background'>
        <div className='text'>
            <div className='avatar'>
            <img src="https://chat.openai.com/_next/image?url=https%3A%2F%2Fs.gravatar.com%2Favatar%2F70aecedf3e956cb10b3abc299608b1af%3Fs%3D480%26r%3Dpg%26d%3Dhttps%253A%252F%252Fcdn.auth0.com%252Favatars%252Fth.png&w=48&q=75" alt="" height={36}/>
            </div>
            <div className='user-text'>
                <p>{inputMessage}</p>
            </div>
        </div>
        </div>
        <div className='bot-color background'>
        <div className='text'>
            <div className='avatar'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="" height={36}/>
            </div>
            <div className='user-text'>
            <p>{responseMessage}</p>
            </div>
        </div>     
        </div>
    </div>
  </div>
)
}

export default Responses;