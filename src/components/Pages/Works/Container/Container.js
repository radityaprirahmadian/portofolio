import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import '../style.scss';
import back from '../../../../assets/back.png';

const Container = ({ children }) => {
  return (
    <div className="container">
      <Link to={'/'}>
        <motion.div
          className="back-button"
          initial={{ opacity: 0.4 }}
          whileHover={{
            opacity: 1,
            width: 'fit-content',
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

      {children}
    </div>
  );
};

export default Container;
