import React from 'react';

import Screen from '../../../components/Element/Screen';
import Container from '../../../components/Pages/Works/Container';
import simonev from '../../../assets/projects/simonev.png';
import simonev2 from '../../../assets/projects/simonev2.png';
import SubContainer from '../../../components/Pages/Works/SubContainer';

const Index = () => {
  return (
    <Screen>
      <Container>
        <SubContainer
          topImage={simonev}
          title={'Website Sistem Monitoring Dan Evaluasi KEMENKO PMK'}
        >
          <div className="section">
            <div className="image-container">
              <img src={simonev2} alt="simonev 2" className="top-image"></img>
            </div>
            <div className="section-title">Description</div>
            <div className="section-content">
              This is a project where I create front end of{' '}
              <span className="highlight">
                online monitoring and evaluation website for KEMENKO PMK
              </span>
              . This website has <span className="highlight">4 user roles</span> that are basic
              user, admin, super admin, and owner of the website, with different responsibility and
              access. With a lot of features. this website is{' '}
              <span className="highlight">used by more than 600 institutions</span> below KEMENKO
              PMK.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">ReactJS</span> and{' '}
              <span className="highlight">ContextAPI</span> for developing, also{' '}
              <span className="highlight">CSS</span> and{' '}
              <span className="highlight">Bootstrap</span> for styling.
            </div>
          </div>
        </SubContainer>
      </Container>
    </Screen>
  );
};

export default Index;
