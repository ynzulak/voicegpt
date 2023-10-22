'use client'
import Submit from '../../components/Submit'

import './styles/main.scss'
import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-fontawesome/index'
import {  faPlus, faBars, faMessage } from '../../node_modules/@fortawesome/free-solid-svg-icons/index'

export default function Home() {
  return (
    <div className='container'>
      <div className='history-container'>
        <div className='new-message'>
          <div className='new new-message-element'><div className='plus'><FontAwesomeIcon icon={faPlus} /></div><span>New message</span></div>
          <div className='hide new-message-element'><span><FontAwesomeIcon icon={faBars} /></span></div>
        </div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Problem 1</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Problem jakiś</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
        <div className='history'><div className='fa-message'><FontAwesomeIcon icon={faMessage} /></div><span>Jak zmienić...</span></div>
      </div>
        <Submit />
    </div>
  )
}