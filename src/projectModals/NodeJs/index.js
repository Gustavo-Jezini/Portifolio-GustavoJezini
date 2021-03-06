import image1 from './images/img1.jpeg';
import image2 from './images/img2.jpeg';
import image3 from './images/img3.jpeg';
import image4 from './images/img4.jpeg';
import image5 from './images/img5.jpeg';
import image6 from './images/img6.jpeg';
import React, { useState } from 'react';
import { FaArrowAltCircleRight , FaArrowAltCircleLeft } from 'react-icons/fa';
import '../modal.css';

const images = [
  { id: 1 , imageName: image1 },
  { id: 2 , imageName: image2 },
  { id: 3 , imageName: image3 },
  { id: 4 , imageName: image4 },
  { id: 5 , imageName: image5 },
  { id: 6 , imageName: image6 },
];

const NodeJs = ({ onClose, children }) => {
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
        <h1>Projeto Back-end</h1>
        <div className='content'>{children}</div>
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
          <span className='description'>Utilizo um banco de dados do MongoDB (hardCoded) e nele insiro usuários, compras, transformo usuários simples em ADM. Posso fazer login com o usuário , e esse login gera um Token que é utilizado como uma verificação para futuras ações do usuário. Por exemplo: Usuários que comuns podem apenas editar suas proprias receitas.</span>
      </div>
    </div>
  )
}


export default NodeJs;
