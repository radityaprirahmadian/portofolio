import React, { useEffect, useRef } from 'react';
import { useInView, useAnimation, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventTracker } from '../../../../utils/analytics';

const Item = ({ image, title, index, link }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else controls.start('hidden');
  }, [controls, isInView]);

  return (
    <motion.div className="item-container" key={index}>
      <motion.div className="image-container">
        <img className="image" alt="works" src={image}></img>
        <motion.div
          className="shadow"
          ref={ref}
          animate={controls}
          variants={{
            visible: { x: 0, y: 0, transition: { duration: 0.2, ease: 'backOut', delay: 1 } },
            hidden: { x: '-1vw', y: '-1vw' },
          }}
        ></motion.div>
      </motion.div>
      <div className="title-container">
        <div className="title">{title}</div>
        <Link
          to={link}
          onClick={() =>
            eventTracker({ category: 'Work', label: `click_${title}`, action: `Click to ${title}` })
          }
        >
          <motion.div
            className="button"
            initial={{ backgroundColor: '$base-cream' }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ borderRadius: '10vh', transition: { ease: 'easeInOut' } }}
          >
            DETAILS
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Item;
