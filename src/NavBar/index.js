import React from 'react';
import './index.css';


const NavBar = () => {
function showLinks() {
  const nav = document.querySelector('.links')
  const navLinks = document.querySelectorAll('.links li')

  nav.classList.toggle('nav-active');

  navLinks.forEach((link) => {
    if (link.class) {
      link.classList = ''
    } else {
      link.classList.toggle('animate-links')
    }
  })
}

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
        <div className='burger' onClick={showLinks}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
    </nav>
  )
}

export default NavBar;
