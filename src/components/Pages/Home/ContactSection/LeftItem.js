import React, { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';

const LeftItem = ({ onClick, image, title, linkText }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else controls.start('hidden');
  }, [controls, isInView]);

  return (
    <motion.div
      className="item-container"
      ref={ref}
      onClick={onClick}
      animate={controls}
      variants={{
        hidden: { width: '15vh' },
        visible: {
          width: '90%',
          transition: { type: 'spring', stiffness: 50, damping: 10 },
        },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1, type: 'spring', stiffness: 500, damping: 10 },
      }}
    >
      <img src={image} alt="social" className="social-image"></img>
      <div className="title">
        <div>{title}</div>
        <div className="link">{linkText}</div>
      </div>
    </motion.div>
  );
};

export default LeftItem;
