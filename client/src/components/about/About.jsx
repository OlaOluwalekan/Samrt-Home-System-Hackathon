// YourComponent.jsx

import React, { useEffect, useState } from 'react';
import FrameOne from '../../assets/Frame-1.jpg';
import FrameTwo from '../../assets/Frame-2.jpg';
import FrameThree from '../../assets/Frame-3.jpg';
import './about.css';
import AnimatedText from './AnimatedText';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger once when the image enters the viewport
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 

  // Large screen JSX
  const largeScreenJSX = (
    <>
        <motion.div 
              ref={ref} // Attach the ref to the component
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only when in view
              transition={{ duration: 0.5 }}
              className="main"
           
        >
      
            {/* First section with text on the left and image on the right */}
            <div 
              className="container">
                <div className="text-section">
                    <h2>About Us</h2>
                    <p>Welcome to Oversee Homes, your trusted partner in smart home automation. Our journey into the world of home automation began with a passion for technology and a vision to simplify and enhance the way people live in their homes.</p>
                </div>
                <div className="image-section">
                    <img src={FrameOne} alt='a team in a meeting' />
                </div>
            </div>

            {/* Second section with text on the right and image on the left */}
            <div className="container">

              <div className="image-section">
                    <img src={FrameTwo} alt='another team in a meeting' />
                </div>
                <div className="text-section text-section-two">
                    <h2>Who we are</h2>
                    <p>At Oversee Homes, we are a team of dedicated experts in smart home technology. With a combined experience of over 3 years in the industry, we have winessed the incredible transformation that smart technology can bring to homes, making tjem safer, more efficient, and more enjoyable places to live</p>
                </div>
               
            </div>

            {/* Third section with text on the left and image on the right */}
            <div className="container">
                <div className="text-section">
                    <h2>Our mission</h2>
                    <p>Our mission is simple yet powerful: to empower homeowners to take control of their living spaces through innovative smart home solutions, we believe that everyone should have access to the latest advancements in technology, and we strive to make smart home automation accessible, affordable, and easy to use for everyone</p>
                </div>
                <div className="image-section">
                    <img src={FrameThree} alt='yet another team in a meeting' />
                </div>
            </div>
            <AnimatedText 
             text="Step into a Smarter, Safer, and more Connected Home"
             className="animated-text"
             />
        </motion.div>
    </>
  );

  // Small screen JSX
  const smallScreenJSX = (
    <>
      <motion.div
      ref={ref} // Attach the ref to the component
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate only when in view
      transition={{ duration: 0.5 }}
      className="main"
    >

     
      {/* Stacked layout for small screens */}
      <div className="container">
        <div className="text-section">
          <h2>About Us</h2>
          <p>Welcome to Oversee Homes, your trusted partner in smart home automation. Our journey into the world of home automation began with a passion for technology and a vision to simplify and enhance the way people live in their homes.</p>
        </div>
        <div className="image-section">
          <img src={FrameOne} alt="a team in a meeting" />
        </div>
      </div>

      <div className="container">
          <div className="text-section ">
              <h2>Who we are</h2>
              <p>At Oversee Homes, we are a team of dedicated experts in smart home technology. With a combined experience of over 3 years in the industry, we have winessed the incredible transformation that smart technology can bring to homes, making tjem safer, more efficient, and more enjoyable places to live</p>
         </div>
        <div className="image-section">
          <img src={FrameTwo} alt="another team in a meeting" />
        </div>
      </div>

      <div className="container">
         <div className="text-section">
            <h2>Our mission</h2>
            <p>Our mission is simple yet powerful: to empower homeowners to take control of their living spaces through innovative smart home solutions, we believe that everyone should have access to the latest advancements in technology, and we strive to make smart home automation accessible, affordable, and easy to use for everyone</p>
        </div>
        <div className="image-section">
          <img src={FrameThree} alt="yet another team in a meeting" />
        </div>
      </div>
      
      </motion.div>
    </>
  );

  return windowWidth > 768 ? largeScreenJSX : smallScreenJSX;
};

export default About;
