const API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/chat/completions';

const sendMessageToChatGPT = async (message: string) => {
  
  const headers = {
      'Authorization': `Bearer ${API_KEY}`, 
      'Content-Type': 'application/json',
  };
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ 
        model: 'gpt-3.5-turbo-16k-0613',
        messages:[{role: 'user', content: message}],
        max_tokens: 100,
      }),
    };

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions)
        const data = await response.json()
        console.log(data);
    } catch (error) {
      console.error(error)
    }
  };
  
  export default sendMessageToChatGPT;