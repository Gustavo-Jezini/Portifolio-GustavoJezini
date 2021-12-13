import React from 'react'
import '../modal.css'
import teste from '../videos/teste2.mp4'

const AppReceitas = ({ onClose, children }) => {
  return (
    <div className='modal'>
      <div className='container'>
        <div className='button'>
        <button onClick={ onClose } className='close'>Close</button>
        </div>
        <div className='content'>{children}</div>
        <video width="320" height="240" autoplay>
          <source src={ teste } type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}

export default AppReceitas;
