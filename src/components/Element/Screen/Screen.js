import React from 'react';
import { motion, useIsPresent } from 'framer-motion';

const Screen = ({ children }) => {
  const isPresent = useIsPresent();
  return (
    <>
      {children}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut', delay: 0.075 } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn', delay: 0.075 } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen-blue"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut', delay: 0.15 } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn', delay: 0.15 } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen-cream"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut', delay: 0.175 } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn', delay: 0.225 } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen-orange"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut', delay: 0.25 } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn', delay: 0.25 } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen-green"
      />
    </>
  );
};

export default Screen;
