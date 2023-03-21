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
      <Container title={'Avana'}>
        <SubContainer topImage={avanadashboard} title={'New Dashboard AVANA'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This website is <span className="highlight">main bussines of AVANA</span> and used by
              all of AVANA Merchants that{' '}
              <span className="highlight">more than 200.000 merchants</span> from{' '}
              <span className="highlight">3 countries (Indonesia, Mayalsia, SIngapore)</span>. This
              website has <span className="highlight"> 4 different package</span> with different
              features that users can access. I Responsible for developing new features and
              maintaining existing features, especially about{' '}
              <span className="highlight">
                shipping (integration with third party), orders, and products
              </span>
              . Also, responsible for{' '}
              <span className="highlight">refactoring this website to new version</span> of design.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">ReactJS, Redux</span> and{' '}
              <span className="highlight">Google API</span> for developing, also{' '}
              <span className="highlight">Tailwind</span> and{' '}
              <span className="highlight">Bulma</span> for styling.
            </div>
          </div>
        </SubContainer>
        <SubContainer topImage={avanaportal} title={'AVANA Portal'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is website that is used for internal needs of AVANA Teams. I responsible for
              developing new feature for finance team needs like{' '}
              <span className="highlight">managing take rate and reports.</span>
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">ReactJS, Laravel</span> and{' '}
              <span className="highlight">Redux</span> for developing, also{' '}
              <span className="highlight">Tailwind</span> and{' '}
              <span className="highlight">Bulma</span> for styling.
            </div>
          </div>
        </SubContainer>
        <SubContainer topImage={avanaripple} title={'AVANA Ripple'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is website for managing reseller configuration for AVANA Merchant that subscribed
              to Agent Plan. Used by <span>more than 100.000 </span>of AVANA Merchants. I
              Responsible for
              <span className="highlight">
                developing and maintaining menu for take rate configuration.
              </span>
              Also, responsible for{' '}
              <span className="highlight">refactoring this website to new version</span> of design.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">ReactJS</span> and{' '}
              <span className="highlight">Redux</span> for developing, also{' '}
              <span className="highlight">SaSS</span> and <span className="highlight">Bulma</span>{' '}
              for styling.
            </div>
          </div>
        </SubContainer>
        <SubContainer topImage={avanastorybook} title={'AVANA Storybook'}>
          <div className="section">
            <div className="section-title">Description</div>
            <div className="section-content">
              This is a components library for AVANA. Create more than{' '}
              <span className="highlight">7 components with lot of variants component</span>.
            </div>
          </div>
          <div className="section">
            <div className="section-title">Tech Stacks</div>
            <div className="section-content">
              Use <span className="highlight">Figma</span> for designing,{' '}
              <span className="highlight">Storybook, Webpack</span> and{' '}
              <span className="highlight">Cypress</span> for developing, also{' '}
              <span className="highlight">SaSS</span> and{' '}
              <span className="highlight">Tailwind</span> for styling.
            </div>
          </div>
        </SubContainer>
      </Container>
    </Screen>
  );
};

export default Index;
