import React from 'react';

//assets
import ppbs from '../../../../assets/projects/ppbs.png';
import './style.scss';

//component
import Item from './Item';
import Title from '../../../Element/Title';

const works = [
  {
    image: ppbs,
    title: 'Peminjaman PPBS',
  },
  {
    image: ppbs,
    title: 'Peminjaman PPBS',
  },
  {
    image: ppbs,
    title: 'Peminjaman PPBS',
  },
  {
    image: ppbs,
    title: 'Peminjaman PPBS',
  },
];

const WorksSection = () => {
  return (
    <div className="works-section">
      <div className="left-section">
        <div className="title">
          <Title hidden={'-20vh'}>Projects</Title>
          <div className="decoration-1">
            <Title hidden={'-15vh'}>and Works</Title>
          </div>
        </div>
      </div>
      <div className="right-section">
        {works.map((item, index) => {
          return <Item image={item.image} title={item.title} key={index} index={index} />;
        })}
      </div>
    </div>
  );
};

export default WorksSection;
