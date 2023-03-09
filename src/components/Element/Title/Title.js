import React, { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';

const Title = ({ hidden, children }) => {
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
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { x: 0, transition: { duration: 0.5, ease: 'backOut' } },
        hidden: { x: hidden || -400 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Title;
