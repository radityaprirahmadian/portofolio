import React from 'react';
import { Link } from 'react-router-dom';
import RightItem from './RightItem';
import LeftItem from './LeftItem';

const Item = ({ link, linkText, image, title, isLeft, isRight, isEmail, setIsCopied }) => {
  if (isLeft) {
    return !isEmail ? (
      <Link to={link} target="_blank">
        <LeftItem onClick={() => {}} title={title} linkText={linkText} image={image} />
      </Link>
    ) : (
      <LeftItem
        onClick={() => {
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
      <Link to={link} target="_blank">
        <RightItem title={title} linkText={linkText} image={image} />
      </Link>
    ) : (
      <RightItem
        onClick={() => {
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
