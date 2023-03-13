import React from 'react';

import Screen from '../../../components/Element/Screen';
import Container from '../../../components/Pages/Works/Container';
import SubContainer from '../../../components/Pages/Works/SubContainer';
import avanadashboard from '../../../assets/projects/avanadashboard.png';
import avanaportal from '../../../assets/projects/avanaportal.png';
import avanastorybook from '../../../assets/projects/avanastorybook.png';
import avanaripple from '../../../assets/projects/avanaripple.png';

const Index = () => {
  return (
    <Screen>
      <Container>
        <SubContainer topImage={avanadashboard} title={'New Dashboard AVANA'}>
          <div className="section">
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
        <SubContainer topImage={avanaportal} title={'AVANA Portal'}>
          <div className="section">
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
        <SubContainer topImage={avanaripple} title={'AVANA Ripple'}>
          <div className="section">
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
        <SubContainer topImage={avanastorybook} title={'AVANA Storybook'}>
          <div className="section">
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
