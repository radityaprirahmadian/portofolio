import React from 'react';
import './style.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Toaster = ({ text, isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="tooltip-container"
          initial={{ scale: 0.5, x: '-50%' }}
          key="tooltip"
          animate={{ scale: 1, x: '-50%' }}
          exit={{
            scale: 0.5,
            opacity: 0,
            x: '-50%',
            transition: { duration: 0.2, ease: 'easeInOut' },
          }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 500,
            damping: 10,
          }}
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toaster;
