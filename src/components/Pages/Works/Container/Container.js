import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './style.scss';
import back from '../../../../assets/back.png';

const Container = ({ topImage, title, children }) => {
  return (
    <div className="container">
      <Link to={'/'}>
        <motion.div
          className="back-button"
          initial={{ opacity: 0.4 }}
          whileHover={{ opacity: 1, transition: { ease: 'easeInOut' } }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={back} alt="back button"></img>
        </motion.div>
      </Link>

      <div className="content">
        <div className="image-container">
          <img src={topImage} alt="top" className="top-image"></img>
        </div>
        <div className="title">{title}</div>
        <div className="children">{children}</div>
      </div>
    </div>
  );
};

export default Container;
