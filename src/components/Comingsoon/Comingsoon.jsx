
import React, { useState } from 'react'
import imagen1 from '../../assets/image/FRIKI-IO-A.svg'; 
import imagen2 from '../../assets/image/FRIKI-IO-B.svg'; 
import style from './coomingsoon.module.css';
// import PropTypes from 'prop-types'

const Comingsoon = props => {
    const { container, 'image-container': imageContainer, active, text, 'text-all': textAll ,circleContainer, circle, ...rest } = style;

    const [activeIndex, setActiveIndex] = useState(0);

    const isActive = (index)=> activeIndex === index ? active : '';

    const handleImageClick = () => {
      setActiveIndex(activeIndex === 1 ? 0 : 1); // Alternar entre 0 y 1
    };
    

    return (
      <div className={container}>

        <div className={`${imageContainer}  ${circleContainer} ${isActive(1)}`}>
            <img src={imagen1} alt='imagen 1' onClick={handleImageClick} />
            <div className={circle}>
            </div>
        </div>

        <div className={`${imageContainer}  ${isActive(0)}`}>
            <img src={imagen2} alt="Imagen 2" onClick={handleImageClick} />
        </div>

        <div>
            <div className={`${textAll} ${text} ${isActive(1)}`}>
                <h1 >¡no more on call rotation <br></br>
                     and night maintenance windows!</h1>
                <p>That it's very crazy!</p>
            </div>
            
            <div className={`${textAll} ${isActive(0)}`} >
                <h1>It's not crazy it's friki</h1>
                <p>Wait for it !!!</p>
            </div>
            
        </div>

      </div>
    );
}

// Comingsoon.propTypes = {}

export default Comingsoon