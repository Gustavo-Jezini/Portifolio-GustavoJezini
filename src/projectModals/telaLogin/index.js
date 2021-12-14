import image1 from './images/img1.png';
import image2 from './images/img2.png';
import image3 from './images/img3.png';
import React, { useState } from 'react';
import { FaArrowAltCircleRight , FaArrowAltCircleLeft } from 'react-icons/fa';
import '../modal.css';

const images = [
  { id: 1 , imageName: image1 },
  { id: 2 , imageName: image2 },
  { id: 3 , imageName: image3 },
];


const LoginPage =  ({ onClose }) => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }


  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
    console.log(current);
  }

  return (
    <div className='modal'>
      <div className='container'>
        <div className='button'>
        <button onClick={ onClose } className='close'>Close</button>
        </div>
        <h1>Tela de Login</h1>
          <div className='imagens'>
             { images.map( (image, index) => 
              <div className={index === current ? 'slide active' : 'slide' }>
                { index === current && (
                  <img className='imagem' alt={image.id} src={image.imageName}/>
                )}
                
              </div> 
            ) }
          </div>
          <div className='arrows'>
            <FaArrowAltCircleLeft onClick={prevImage} className='left-arrow' />
            <FaArrowAltCircleRight onClick={nextImage} className='right-arrow' />
          </div>
          <span className='description'>
            Esta é uma tela de login com efeitos animados em CSS. Pesquisei sobre @keyframe e decidi implementar em um projeto rapido. Em uma tarde, apliquei esse novo conhecimento e mais outros para realizar o projeto. Feito com React, CSS e carinho
          </span>

      </div>
    </div>
  )
}

export default LoginPage
