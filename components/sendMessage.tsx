const API_KEY = process.env.NEXT_PUBLIC_CHAT_GPT
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
        model: 'gpt-3.5-turbo',
        messages:[{role: 'user', content: message}],
        max_tokens: 100,
      }),
    };

    try {
        const response = await fetch(API_URL, requestOptions)
        const data = await response.json()
        console.log(data);
        console.log(data.choices[0].message.content);
        return data.choices[0].message.content;
    } catch (error) {
      console.error(error)
    }

  };
  
  export default sendMessageToChatGPT;