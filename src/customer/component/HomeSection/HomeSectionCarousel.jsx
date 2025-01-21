import React, { useRef, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCart from '../HomeSectionCart/HomeSectionCart';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

// Styles for the carousel wrapper and button
const styles = {
  carouselWrapper: {
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    border: '0px solid grey',
    backgroundColor: 'dull white',
  },
  leftArrowButton: {
    position: 'absolute',
    top: '50%',
    left: '2px',
    transform: 'translateY(-50%)',
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    padding: '3px',
    borderRadius: '20%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightArrowButton: {
    position: 'absolute',
    top: '50%',
    right: '2px',
    transform: 'translateY(-50%) rotate(180deg)',
    zIndex: 10,
    background: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    padding: '3px',
    borderRadius: '20%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const HomeSectionCarousel = ({data,sectionName}) => {
  // Reference to the AliceCarousel component
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Create carousel items
  const items = data.map((item, index) => (
    <HomeSectionCart product={item} key={index} />
  ));

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  // Use carousel methods to slide items
  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  // Sync active index with carousel
  const syncActiveIndex = (event) => {
    setActiveIndex(event.item);
  };

  return (
    <div className="border">
      <h2 className='text-2xl font-extrabold text-green-800 py-5 text-left'>{sectionName}</h2>
      <div style={styles.carouselWrapper}>
        <AliceCarousel
          ref={carouselRef}
          items={items}
          activeIndex={activeIndex}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
        />

        {activeIndex > 0 && ( // Conditionally render the "Previous" button
          <Button
            onClick={slidePrev}
            style={styles.leftArrowButton}
            aria-label="previous"
          >
            <KeyboardArrowLeftIcon
              style={{ color: 'white', fontSize: '30px' }}
            />
          </Button>
        )}
        <Button
          onClick={slideNext}
          style={styles.rightArrowButton}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon style={{ color: 'white', fontSize: '30px' }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
