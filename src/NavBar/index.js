import React from 'react';
import './index.css';


const NavBar = () => {
  return (
    <nav>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&family=Playfair+Display:ital,wght@0,400;1,700&display=swap" rel="stylesheet"/>
      <div className='logo'>
        <h4>Gustavo Jezini</h4>
      </div>
      <ul className='links'>
        <li>Sobre mim</li>
        <li>Tecnologias</li>
        <li>Projetos</li>
        <li>Objetivos</li>
      </ul>
    </nav>
  )
}

export default NavBar;
