import React, { useEffect, useRef, useState } from 'react';
import styles from './Carrusel.module.scss';
import { data } from '../../../assets/Carrusel/data';


// ...

const Carrusel = () => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth"
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    setCurrentIndex((curr) => {
      if (direction === 'prev') {
        // Si está en la primera posición, tomar la última posición del array
        return curr === 0 ? data.length - 1 : curr - 1;
      } else {
        // Si está en la última posición, tomar la primera posición del array
        return curr === data.length - 1 ? 0 : curr + 1;
      }
    });
  };


  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  // Links tenia conflictos con el carrusel y le quitaba la
  const handleImageClick = () => {
    window.location.href = '/productos';
  };

  return (
    <div className={styles.fade}>
      <div className={styles.mainContainer}>
        <div className={styles.sliderContainer}>
          <div className={styles.leftArrow} onClick={() => scrollToImage('prev')}>&#10092;</div>
          <div className={styles.rightArrow} onClick={() => scrollToImage('next')}>&#10093;</div>
          <div className={styles.containerImages}>
            <ul ref={listRef} className={styles.imageList}>
              {data.map((item, idx) => (
                <li key={idx} className={styles.imageItem}>
                  <img
                    src={item.imgUrl}
                    alt={`slide-${item.id}`}
                    className={styles.image}
                    onClick={handleImageClick}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.dotsContainer}>
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`${styles.dotContainerItem} ${idx === currentIndex ? styles.active : ""}`}
                onClick={() => goToSlide(idx)}
              >
                &#9865;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;