import React from 'react';

//assets
import linkedin from '../../../../assets/social/linkedin.png';
import gmail from '../../../../assets/social/gmail.png';
import wa from '../../../../assets/social/wa.png';
import github from '../../../../assets/social/github.png';
import './style.scss';

//component
import Title from '../../../Element/Title';
import Item from './Item';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="left-section">
        <div className="title">
          <Title hidden={'-20vh'}>Contact</Title>
          <Title hidden={'-14vh'}>Me Here!</Title>
        </div>
        <i className="notes">P.S. Don’t hesitate to contact me. Maybe we can be a good partner?</i>
      </div>
      <div className="right-section">
        <div className="social-container">
          <Item
            isLeft
            title={'Raditya Prirahmadian'}
            image={linkedin}
            link={'https://www.linkedin.com/in/radityaprirahmadian/'}
            linkText={'in/radityaprirahmadian/'}
          />
          <Item
            title={'082295108710'}
            image={wa}
            link={'https://wa.me/6282295108710'}
            linkText={'https://wa.me/6282295108710'}
            isRight
          />
          <Item
            title={'RadityaP'}
            image={github}
            link={'https://www.github.com/RadityaP'}
            linkText={'github.com/RadityaP'}
            isLeft
          />
          <Item
            title={'Raditya Prirahmadian'}
            image={gmail}
            link={'https://www.gmail.com'}
            linkText={'prirahmadian@gmail.com'}
            isEmail
            isRight
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
