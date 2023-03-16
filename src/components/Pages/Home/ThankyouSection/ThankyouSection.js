import React from 'react';
import { motion } from 'framer-motion';

//assets
import './style.scss';

const ThankyouSection = () => {
  return (
    <div className="thankyou-section">
      <div className="big-text">
        <span>Thank you</span>
        <motion.span
          initial={{ scale: 1 }}
          animate={{ scale: 0.7 }}
          transition={{ repeat: Infinity, duration: 0.4, repeatType: 'reverse' }}
          className="dot"
        ></motion.span>
      </div>
      <div className="notes">
        P.S.2 This is just <span>version 1</span> of my personal website, <span>version 2</span> is
        under development, going to live very soon.
      </div>
    </div>
  );
};

export default ThankyouSection;
