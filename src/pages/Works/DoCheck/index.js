import React from 'react';

import Screen from '../../../components/Element/Screen';
import Container from '../../../components/Pages/Works/Container';
import SubContainer from '../../../components/Pages/Works/SubContainer';
import docheckadmin from '../../../assets/projects/docheckadmin.png';
import dochecklanding from '../../../assets/projects/dochecklanding.png';

const Index = () => {
  return (
    <Screen>
      <Container>
        <SubContainer topImage={docheckadmin} title={'Administrator Dashboard Docheck'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is website for managing all users, questionnaires, and another datas. I create
              <span className="highlight">this website from scratch</span>. This website is used by
              Administrator only.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">NextJS, Redux</span> and{' '}
              <span className="highlight">Typescript</span> for developing, also{' '}
              <span className="highlight">Styled Component</span> and{' '}
              <span className="highlight">SaSS</span> for styling.
            </div>
          </div>
        </SubContainer>
        <SubContainer topImage={dochecklanding} title={'Docheck Landing Page'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              Company Landing Page. I develop this landing page from scratch. Have{' '}
              <span className="highlight">more than 10 pages</span>, and lot of contents that
              represents the company. Also setting this website to be{' '}
              <span className="highlight">SEO freindly</span>. I also do{' '}
              <span className="highlight">customize the selected theme</span> so the landing page
              design is more powerfull.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">Wordpress, YoastSEO</span> and{' '}
              <span className="highlight">lot of wordpress library</span> for developing.
            </div>
          </div>
        </SubContainer>
      </Container>
    </Screen>
  );
};

export default Index;
