import React from 'react';

//assets
import linkedin from '../../../../assets/social/linkedin.png';
import gmail from '../../../../assets/social/gmail.png';
import wa from '../../../../assets/social/wa.png';
import github from '../../../../assets/social/github.png';
import './style.scss';

//component
import Title from '../../../Element/Title';
import LeftItem from './LeftItem';
import RightItem from './RightItem';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="left-section">
        <div className="title">
          <Title hidden={'-30vh'}>Contact</Title>
          <Title hidden={'-20vh'}>Me Here!</Title>
        </div>
        <i className="notes">P.S. Don’t hesitate to contact me. Maybe we can be a good partner?</i>
      </div>
      <div className="right-section">
        <div className="social-container">
          <LeftItem
            title={'Raditya Prirahmadian'}
            image={linkedin}
            link={'www.linkedin.com/in/radityaprirahmadian/'}
          />
          <RightItem title={'082295108710'} image={wa} link={'https://wa.me/6282295108710'} />
          <LeftItem title={'RadityaP'} image={github} link={'github.com/RadityaP'} />
          <RightItem title={'Raditya Prirahmadian'} image={gmail} link={'prirahmadian@gmail.com'} />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
