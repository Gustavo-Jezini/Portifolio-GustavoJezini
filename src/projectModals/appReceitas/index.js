import image1 from './images/img1.jpeg';
import image2 from './images/img2.jpeg';
import image3 from './images/img3.jpeg';
import image4 from './images/img4.jpeg';
import image5 from './images/img5.jpeg';
import image6 from './images/img6.jpeg';
import image7 from './images/img7.jpeg';
import image8 from './images/img8.jpeg';
import image9 from './images/img9.jpeg';
import image10 from './images/img10.jpeg';
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
  { id: 7 , imageName: image7 },
  { id: 8 , imageName: image8 },
  { id: 9 , imageName: image9 },
  { id: 10 , imageName: image10 },
];


const AppReceitas = ({ onClose }) => {
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
        <button name='appReceitas' onClick={ onClose } className='close'>Close</button>
        </div>
        <h1>Aplicativo de Receitas</h1>
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
          <span className='description'>Este projeto foi feito em squad. Utilizamos as API's externas TheMealDB e TheCockTailDB. O Projeto foi feito em 7 dias. Nele pude aperfeicoar diversas habilidades , tanto de softSkills quando de hardSkills. Como o Projeto era em grupo, em diversos momentos tive que assumir uma postura de lider para gerenciar alguns problemas. Com isso, pratiquei troca de feedbacks e troca de conhecimentos. Alem de tambem praticar FETCH de API, Context API e react HOOKS.</span>
      </div>
    </div>
  )
}

export default AppReceitas;
