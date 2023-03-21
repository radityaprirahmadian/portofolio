import React from 'react';
import { Link } from 'react-router-dom';
import RightItem from './RightItem';
import LeftItem from './LeftItem';
import { eventTracker } from '../../../../utils/analytics';

const Item = ({ link, linkText, name, image, title, isLeft, isRight, isEmail, setIsCopied }) => {
  if (isLeft) {
    return !isEmail ? (
      <Link
        to={link}
        target="_blank"
        onClick={() =>
          eventTracker({ category: 'Contact', label: `Click ${name} contact`, action: 'click' })
        }
      >
        <LeftItem onClick={() => {}} title={title} linkText={linkText} image={image} />
      </Link>
    ) : (
      <LeftItem
        onClick={() => {
          eventTracker({ category: 'Contact', label: `Click ${name} contact`, action: 'click' });
          navigator.clipboard.writeText(link);
          setIsCopied(true);
        }}
        title={title}
        linkText={linkText}
        image={image}
      />
    );
  }

  if (isRight) {
    return !isEmail ? (
      <Link
        to={link}
        target="_blank"
        onClick={() =>
          eventTracker({ category: 'Contact', label: `Click ${name} contact`, action: 'click' })
        }
      >
        <RightItem title={title} linkText={linkText} image={image} />
      </Link>
    ) : (
      <RightItem
        onClick={() => {
          eventTracker({ category: 'Contact', label: `Click ${name} contact`, action: 'click' });
          navigator.clipboard.writeText(link);
          setIsCopied(true);
        }}
        title={title}
        linkText={linkText}
        image={image}
      />
    );
  }
};

export default Item;
