import React from 'react';
import IntroductionSection from '../../components/Pages/Home/IntroductionSection';
import ToolsSection from '../../components/Pages/Home/ToolsSection';
import WorksSection from '../../components/Pages/Home/WorksSection';
import ContactSection from '../../components/Pages/Home/ContactSection';
import ThankyouSection from '../../components/Pages/Home/ThankyouSection';

const Index = () => {
  return (
    <div>
      <IntroductionSection />
      <ToolsSection />
      <WorksSection />
      <ContactSection />
      <ThankyouSection />
    </div>
  );
};

export default Index;
