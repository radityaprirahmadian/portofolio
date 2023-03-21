import React from 'react';

import Screen from '../../../components/Element/Screen';
import Container from '../../../components/Pages/Works/Container';
import peminjamanPPBS from '../../../assets/projects/ppbs.png';
import SubContainer from '../../../components/Pages/Works/SubContainer';

const Index = () => {
  return (
    <Screen>
      <Container title={'Peminjaman PPBS'}>
        <SubContainer topImage={peminjamanPPBS} title={'Website Peminjaman PPBS'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is a project where I create{' '}
              <span className="highlight"> UI Design and front end of booking system</span> for
              booking room in Gedung PPBS in Universitas Padjadjaran. Build with{' '}
              <span className="highlight">Task Centered System Design method</span>, this website
              consists of 4 different user roles with different task(basic user, building manager,
              academic manager, and resource manager), and can be used by all of students in
              Universitas Padjadjaran.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing, and{' '}
              <span className="highlight">ReactJS</span> and{' '}
              <span className="highlight">ContextAPI React</span> for developing, also{' '}
              <span className="highlight">SaSS</span> and{' '}
              <span className="highlight">Bootstrap</span> for styling.
            </div>
          </div>
        </SubContainer>
      </Container>
    </Screen>
  );
};

export default Index;
