
function inputResponse() {
    const [inputMessage, setInputMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
  
    const handleMessageSubmit = async () => {
      const response = await sendMessageToChatGPT(inputMessage);
      setResponseMessage(response);
    };
}
export default inputResponse;