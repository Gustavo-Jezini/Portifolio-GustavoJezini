import React from 'react';
import './index.css';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
      <div className='email'>
        <span className='footer-texto'>
          Caso você se interesse pelo meu trabalho, me mande um email!
        </span>
        <form className='form-email' action="https://formsubmit.co/gustavojezini@gmail.com" method="POST">
            <input className='input-email' type="email" name="email" placeholder="Email Address" required/>
            <textarea className='input-Text' type="text" name="Assunto" required placeholder='Me envie um email!!'/>
            <button type="submit">Enviar</button>
        </form>
      </div>
      <div className='redes-sociais'>
        <ul className='links-sociais'>
          <li>
            <a href='https://www.linkedin.com/in/gustavojezini/' target='_blank' rel="noreferrer" >LinkedIn</a>
          </li>
          <li>
            <a href='https://github.com/Gustavo-Jezini' target='_blank' rel="noreferrer">Github</a>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Footer
