import React, { useEffect, useState, useRef } from 'react';

//assets
import linkedin from '../../../../assets/social/linkedin.png';
import gmail from '../../../../assets/social/gmail.png';
import wa from '../../../../assets/social/wa.png';
import github from '../../../../assets/social/github.png';
import './style.scss';

//component
import Title from '../../../Element/Title';
import Item from './Item';
import Toaster from '../../../Element/Toaster';
import EventScrollTracker from '../../../Element/EventScrollTracker';

const ContactSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const target = useRef(null);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, [2000]);
    }
  }, [isCopied]);

  return (
    <EventScrollTracker targetRef={target} action="Scroll To Contact Section">
      <div className="contact-section" ref={target}>
        <div className="left-section">
          <div className="title">
            <Title hidden={'-20vh'}>Contact</Title>
            <Title hidden={'-14vh'}>Me Here!</Title>
          </div>
          <i className="notes">
            P.S. Don’t hesitate to contact me. Maybe we can be a good partner?
          </i>
        </div>
        <div className="right-section">
          <div className="social-container">
            <Item
              isLeft
              title={'Raditya Prirahmadian'}
              name={'LinkedIn'}
              image={linkedin}
              link={'https://www.linkedin.com/in/radityaprirahmadian/'}
              linkText={'in/radityaprirahmadian/'}
            />
            <Item
              title={'082295108710'}
              image={wa}
              name={'Whatsapp'}
              link={'https://wa.me/6282295108710'}
              linkText={'https://wa.me/6282295108710'}
              isRight
            />
            <Item
              title={'RadityaP'}
              image={github}
              name={'Github'}
              link={'https://www.github.com/RadityaP'}
              linkText={'github.com/RadityaP'}
              isLeft
            />
            <Item
              title={'Raditya Prirahmadian'}
              image={gmail}
              name={'Gmail'}
              link={'work.radityaprirahmadian@gmail.com'}
              linkText={'work.radityaprirahmadian@gmail.com'}
              isEmail
              setIsCopied={setIsCopied}
              isRight
            />
          </div>
        </div>
        <Toaster text="Email Copied!" isVisible={isCopied} />
      </div>
    </EventScrollTracker>
  );
};

export default ContactSection;
