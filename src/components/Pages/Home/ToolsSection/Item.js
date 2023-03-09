import React, { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

const Item = ({ title, logo, index }) => {
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
      key={index}
      className="item"
      ref={ref}
      animate={controls}
      variants={{
        visible: { x: -20, transition: { duration: 0.5, ease: 'backOut' } },
        hidden: { x: -100 },
      }}
      whileHover={{
        scale: 1.1,
        transition: { type: 'spring', stiffness: 400, damping: 10 },
      }}
    >
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo"></img>
      </div>
      <div className="title">{title}</div>
    </motion.div>
  );
};

export default Item;
