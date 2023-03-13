import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import '../style.scss';

const SubContainer = ({ topImage, title, children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
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
  );
};

export default SubContainer;
