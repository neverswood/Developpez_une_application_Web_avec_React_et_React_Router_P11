import React from 'react';
import Banner from '../components/Banner';
import LodgingList from '../components/LodgingList';

function Home() {
  return (
    <div className="home">
      <Banner />
      <LodgingList />
    </div>
  );
}

export default Home;
