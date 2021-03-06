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
    <main id='tec' className='tec'> 
      <div className='tecTexto'>
        <span>No curso da trybe tive contato com otimas tecnologias para realizar inumeros projetos da maneira mais pratica e eficaz possível. </span>
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
