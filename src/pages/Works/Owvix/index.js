import React from 'react';

import Screen from '../../../components/Element/Screen';
import Container from '../../../components/Pages/Works/Container';
import owvix from '../../../assets/projects/owvix.png';
import SubContainer from '../../../components/Pages/Works/SubContainer';

const Index = () => {
  return (
    <Screen>
      <Container>
        <SubContainer topImage={owvix} title={'Landing Page Owvix'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is a project where I create{' '}
              <span className="highlight">landing page website</span> of Owvix Creative, a digital
              creative agency. This website is website that{' '}
              <span className="highlight">SEO friendly and indexed by google search</span>. Has{' '}
              <span className="highlight">more than 120 photos</span>, but optimized using{' '}
              <span className="highlight">NextJS Image Optimization</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">NextJS</span> for developing, also{' '}
              <span className="highlight">Tailwind CSS</span> for styling.
            </div>
          </div>
        </SubContainer>
      </Container>
    </Screen>
  );
};

export default Index;
