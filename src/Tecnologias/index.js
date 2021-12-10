import React from 'react'
import './index.css';
import javaScript from './icons/javaScrip.png'
import HTML from './icons/Html.png'
import NodeJs from './icons/nodeJs.png'
import MongoDB from './icons/MongoDb.png'
import CSS from './icons/css.png'
import MySQL from './icons/MySQL.png'

const Tecnologias = () => {
  return (
    <main className='tec'> 
      <div className='tecTexto'>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
      </div>
      <div className='tecImages'>
        <img src={javaScript} alt='JavaScript'/>
        <img src={MongoDB} alt='MongoDB'/>
        <img src={NodeJs} alt='NodeJs'/>
        <img src={HTML} alt='HTML'/>
        <img src={CSS} alt='CSS'/>
        <img src={MySQL} alt='MySQL'/>
      </div>
    </main>
  )
}

export default Tecnologias;
