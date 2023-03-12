import React, { useEffect, useRef } from 'react';
import { useAnimation, useInView, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Item = ({ link, linkText, image, title, isLeft, isRight, isEmail }) => {
  const LeftItem = ({ onClick }) => {
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

  const RightItem = ({ onClick }) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
      if (isInView) {
        controls.start('visible');
      } else controls.start('hidden');
    }, [controls, isInView]);

    return (
      <div className="right-side">
        <motion.div
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
          className="item-container"
          initial={{ width: '15vh' }}
          exit={{}}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, type: 'spring', stiffness: 500, damping: 10 },
          }}
        >
          <div className="title">
            <div>{title}</div>
            <div className="link">{linkText}</div>
          </div>
          <img src={image} alt="social" className="social-image"></img>
        </motion.div>
      </div>
    );
  };

  if (isLeft) {
    return !isEmail ? (
      <Link to={link} target="_blank">
        <LeftItem />
      </Link>
    ) : (
      <LeftItem
        onClick={() => {
          navigator.clipboard.writeText(link);
        }}
      />
    );
  }

  if (isRight) {
    return !isEmail ? (
      <Link to={link} target="_blank">
        <RightItem />
      </Link>
    ) : (
      <RightItem
        onClick={() => {
          navigator.clipboard.writeText(link);
        }}
      />
    );
  }
};

export default Item;
