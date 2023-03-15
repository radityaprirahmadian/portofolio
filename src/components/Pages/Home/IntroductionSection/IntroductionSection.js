import React, { useState } from 'react';
import { motion } from 'framer-motion';

//assets
import fotoProfil from '../../../../assets/foto.png';
import './style.scss';

const IntroductionSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    hover: { backgroundColor: '#B8644E', transition: { ease: 'easeInOut' } },
  };

  return (
    <div className="introduction-section">
      <div className="left-section">
        <div className="top">
          <div className="big-text">Hi!</div>
          <div className="short-desc">
            A professional <span className="title-text">Frontend Web Developer</span> here, you can
            call me <span className="title-text">Radit.</span>
          </div>
        </div>
        <div className="bottom">
          <div className="long-desc">
            Hard-worker, critical thinker, and also great communicator that have an ability work as
            a team but able to work individually that will be a great point to solve problem and
            serve a brilliant solution.
          </div>
        </div>
      </div>
      <motion.div className="right-section" variants={variants} animate={isHovered ? 'hover' : ''}>
        <motion.img
          initial={{ scale: 1, y: '-50%' }}
          animate={{ y: '-50%' }}
          whileHover={{
            y: '-50%',
            scale: 1.1,
            transition: { type: 'spring', stiffness: 400, damping: 10 },
          }}
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          src={fotoProfil}
          className="foto"
          alt="foto profil"
        ></motion.img>
      </motion.div>
    </div>
  );
};

export default IntroductionSection;
