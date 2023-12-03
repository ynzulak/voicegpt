import fs from "fs";
import path from "path";
import OpenAI from "openai";

const API_KEY = process.env.NEXT_PUBLIC_CHAT_GPT
console.log(path.resolve);
const openai = new OpenAI({apiKey: API_KEY, dangerouslyAllowBrowser: true});
const speechFile = path.resolve("./speech.mp3");

async function TextToSpeech() {
  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: '',
  });
  console.log(speechFile);
  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.promises.writeFile(speechFile, buffer);
}

export default TextToSpeech
