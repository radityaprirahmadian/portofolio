import React from 'react';

//assets
import './style.scss';
import redux from '../../../../assets/redux.png';
import react from '../../../../assets/react.png';
import figma from '../../../../assets/figma.png';
import next from '../../../../assets/next.png';
import tailwind from '../../../../assets/tailwind.png';
import bootstrap from '../../../../assets/bootstrap.png';
import cypress from '../../../../assets/cypress.png';
import storybook from '../../../../assets/storybook.png';

//component
import Item from './Item';
import Title from '../../../Element/Title';

const tools = [
  {
    logo: react,
    title: 'React JS',
  },
  {
    logo: redux,
    title: 'React Redux',
  },
  {
    logo: figma,
    title: 'Figma',
  },
  {
    logo: next,
    title: 'Next JS',
  },
  {
    logo: tailwind,
    title: 'Tailwind',
  },
  {
    logo: bootstrap,
    title: 'Bootstrap',
  },
  {
    logo: storybook,
    title: 'Storybook',
  },
  {
    logo: cypress,
    title: 'Cypress',
  },
];

const ToolsSection = () => {
  return (
    <div className="tools-section">
      <div className="left-section">
        {tools.map((item, index) => {
          return <Item title={item.title} logo={item.logo} key={index} index={index} />;
        })}
      </div>
      <div className="right-section">
        <div className="title">
          <Title hidden={'-15vh'}> The things</Title>
          <div className="decoration-1">
            <Title hidden={'-20vh'}>that I work</Title>
          </div>
          <Title hidden={'-7vh'}>with</Title>
          <div className="decoration-1"></div>
        </div>
        <div className="decoration-2"></div>
      </div>
    </div>
  );
};

export default ToolsSection;
