import React, { useState } from 'react';
import './projetos.css';
import appReceitas from './icones/receitas.png'
import backend from './icones/backend.png'
import telaLogin from './icones/loginreal.png'
import trivia from './icones/trivia.png'
import AppReceitas from '../projectModals/appReceitas';

const Projetos = () => {
  const [showModal, setShowModal] = useState(false);
  
  const openModel = () => {
    setShowModal(prev => !prev)
  }
  return (
    <main className='projetos'>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&family=Indie+Flower&family=Patrick+Hand&family=Playfair+Display:ital,wght@0,400;1,700&display=swap" rel="stylesheet"/>
      <div className='projetoText'>
        <h1>PROJETOS</h1>
      </div>
      { showModal ? <AppReceitas onClose={ openModel }>Modal aqui</AppReceitas> : null }
      <dit className='cards'>
        <div 
          className='cardProjeto'
          onClick={ openModel }
        >
          <img src={appReceitas} alt='Aplicativo de receitas'/>
          <ul className='tecnologias'>
            <li>JavaScript</li>
            <li>Context API</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className='cardProjeto'>
          <img src={trivia} alt='trivia'/>
            <ul className='tecnologias'>
            <li>JavaScript</li>
            <li>Redux</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className='cardProjeto'>
          <img src={backend} alt='backend'/>
          <ul className='tecnologias'>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className='cardProjeto'>
          <img src={ telaLogin } alt='Login'/>
          <ul className='tecnologias'>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
          </ul>
        </div>
      </dit>
    </main>
  )
}

export default Projetos;
