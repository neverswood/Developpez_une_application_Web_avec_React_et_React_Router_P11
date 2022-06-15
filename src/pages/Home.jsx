import React from 'react';
import Banner from '../components/Banner';
import LodgingList from '../components/LodgingList';

export function Home() {
  return (
    <main className="home">
      <Banner />
      <LodgingList />
    </main>
  );
}
