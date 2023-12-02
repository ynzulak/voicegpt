import fs from "fs";
import path from "path";
import OpenAI from "openai";
import { useChat } from "./ChatContext";

const apiKey = process.env.NEXT_PUBLIC_CHAT_GPT;
const openai = new OpenAI({apiKey});

const speechFile = path.resolve(`./${Date()}.mp3`);

const TextToSpeech = async() =>{
    const {
        responseMessage,
      } = useChat();
    const mp3 = await openai.audio.speech.create({
      model: "tts-1",
      voice: "alloy",
      input: 'siema',
    });
    console.log(speechFile);
    const buffer = Buffer.from(await mp3.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);
  }
  TextToSpeech()
export default TextToSpeech
