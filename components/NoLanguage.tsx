import { useChat } from "./ChatContext"


const noLanguageComponent = () => {
    const { 
        isSpeech, 
        setIsSpeech,
        setTranscript,
        noSupport, 
        setNoSupport,
        showModal, 
        setShowModal,
        language,
        noLanguage, 
        setNoLanguage
      } = useChat()

      const closeModal = () => {
        setShowModal(false);
      };
    

    return (
        <div className="no-support-modal">
            <div className="modal-text">
                <p>Select your language if you want to use voice recognition or text to speech compontent</p>
            </div>
            <button className="ok-button" onClick={closeModal}>Ok</button>
      </div>
    )
}

export default noLanguageComponent