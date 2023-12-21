'use client'
import Submit from '../../components/Submit'
import { ChatProvider } from '../../components/ChatContext'


import './styles/main.scss'

export default function Home() {
  return (
    <ChatProvider>
    <div className='container'>
        <Submit />
    </div>
    </ChatProvider>
  )
}