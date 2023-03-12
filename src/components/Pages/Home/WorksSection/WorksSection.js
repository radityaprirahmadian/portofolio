import React from 'react';

//assets
import ppbs from '../../../../assets/projects/ppbs.png';
import owvix from '../../../../assets/projects/owvix.png';
import simonev from '../../../../assets/projects/simonev.png';
import bni from '../../../../assets/projects/bni.png';
import './style.scss';

//component
import Item from './Item';
import Title from '../../../Element/Title';

const works = [
  {
    image: ppbs,
    title: 'Website Peminjaman Ruangan PPBS',
    link: '/peminjaman-ppbs',
  },
  {
    image: owvix,
    title: 'Landing Page Owvix',
    link: '/owvix',
  },
  {
    image: simonev,
    title: 'Website SIMONEV KEMENKO PMK',
    link: '/simonev-kemenko',
  },
  {
    image: bni,
    title: 'BNI x Traveloka and Bluebird',
    link: '/bni',
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
          return (
            <Item
              image={item.image}
              title={item.title}
              key={index}
              index={index}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorksSection;
