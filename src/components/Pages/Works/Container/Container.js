import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

import './style.scss';
import back from '../../../../assets/back.png';

const Container = ({ topImage, title, children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div className="container">
      <Link to={'/'}>
        <motion.div
          className="back-button"
          initial={{ opacity: 0.4 }}
          whileHover={{
            opacity: 1,
            width: '10rem',
            transition: {
              duration: 0.4,
              type: 'spring',
              stiffness: 100,
              damping: 10,
              ease: 'easeInOut',
            },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={back} alt="back button"></img>
          <span>Back to Home</span>
        </motion.div>
      </Link>

      <div className="content">
        <div className="image-container">
          <img src={topImage} alt="top" className="top-image"></img>
        </div>
        <div className="title">{title}</div>
        <div className="children">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
              visible: { x: 0, transition: { duration: 0.4, ease: 'backOut' } },
              hidden: { x: '-10vw' },
            }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Container;
