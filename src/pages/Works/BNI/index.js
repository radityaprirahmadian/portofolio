import React from 'react';

import Screen from '../../../components/Element/Screen';
import Container from '../../../components/Pages/Works/Container';
import bni from '../../../assets/projects/bni.png';
import SubContainer from '../../../components/Pages/Works/SubContainer';

const Index = () => {
  return (
    <Screen>
      <Container>
        <SubContainer topImage={bni} title={'Website Sistem Monitoring Dan Evaluasi KEMENKO PMK'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is a project where I and teams create a system that integrating{' '}
              <span className="highlight"> BNI and Traveloka and Bluebird</span>. This feature{' '}
              <span className="highlight">will be available in BNI Mobile Apps</span> and used by
              all BNI Mobile Apps users. This feature let{' '}
              <span className="highlight">user book flight and taxi from BNI Mobile Apps</span> like
              how user can do it from Traveloka and Bluebird.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">NextJS</span>, {''}
              <span className="highlight">Redux</span> and {''}
              <span className="highlight">Redux Toolkit</span> {''}
              for developing, also <span className="highlight">Tailwind</span> for styling.
            </div>
          </div>
        </SubContainer>
      </Container>
    </Screen>
  );
};

export default Index;
