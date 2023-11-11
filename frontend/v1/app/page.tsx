import Features from '@/_components/Features';
import HomePageBanner from '@/_components/HomePageBanner';
import Quotes from '@/_components/Quotes';
import React from 'react';


const Home: React.FC = () => {
  return (
    <div>
      <HomePageBanner />
      <Features />
      <Quotes />
    </div>
  );
};

export default Home;
