import React from 'react';
import { Banner } from './Banner.jsx';
import { LodgingList } from './LodgingList.jsx';

export function Home() {
  return (
    <main className="home">
      <Banner />
      <LodgingList />
    </main>
  );
}
