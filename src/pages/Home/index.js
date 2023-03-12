import React from 'react';
import IntroductionSection from '../../components/Pages/Home/IntroductionSection';
import ToolsSection from '../../components/Pages/Home/ToolsSection';
import WorksSection from '../../components/Pages/Home/WorksSection';
import ContactSection from '../../components/Pages/Home/ContactSection';
import ThankyouSection from '../../components/Pages/Home/ThankyouSection';
import Screen from '../../components/Element/Screen';

const Index = () => {
  return (
    <Screen>
      <IntroductionSection />
      <ToolsSection />
      <WorksSection />
      <ContactSection />
      <ThankyouSection />
    </Screen>
  );
};

export default Index;
