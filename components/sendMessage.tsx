import { useState } from "react";

const API_KEY = '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';
const API_URL = 'https://api.openai.com/v1/chat/completions';

const sendMessageToChatGPT = async (message: string) => {
  
  const [chatHistory, setChatHistory] = useState([]);
  

  let context = ""; // Inicjalizacja kontekstu
  if (chatHistory.length > 0) {
      // Jeśli jest dostępna historia, dołącz ją do kontekstu
      context = chatHistory.map(item => `User: ${item.userInput}\nChatGPT: ${item.response}`).join("\n");
  }

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
        data.choices[0].message.content;
    } catch (error) {
      console.error(error)
    }
  };
  
  export default sendMessageToChatGPT;