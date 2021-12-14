import image1 from './images/img1.png';
import image2 from './images/img2.png';
import image3 from './images/img3.png';
import image4 from './images/img4.png';
import image5 from './images/img5.png';
import image6 from './images/img6.png';
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

const Trivia = ({ onClose }) => {
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
        <h1>Jogo Trivia</h1>
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
            Projeto feito em Squad. Utilizamos uma API externa para as perguntas e suas respectivas respostas. Existe um sistema de ranking e tambem de pontuacao. Ao acertar rapido as questoes , mais pontos se faz. Nesse projeto pude treinar softSkills e HardSkills.
          </span>

      </div>
    </div>
  )
}


export default Trivia
