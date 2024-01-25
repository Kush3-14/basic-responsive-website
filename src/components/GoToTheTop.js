import React, { useState, useEffect } from 'react';
import styles from './GoToTheTop.module.css'; // Import your CSS module

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(true); // Set initial state to true

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    // Set visibility based on scroll position
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div>
      <button
        className={`${styles.goToTopButton} ${isVisible ? styles.visible : ''}`}
        onClick={scrollToTop}
      >
        &uarr;
      </button>
      
      </div>
    </>
  );
};

export default GoToTopButton;
