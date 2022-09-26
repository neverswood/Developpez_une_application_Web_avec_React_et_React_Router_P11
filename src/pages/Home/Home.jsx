import React from 'react';
import { Banner } from './Banner.jsx';
import { LodgingList } from './LodgingList.jsx';
import data from '../../data/data.json';

export function Home() {
  return (
    <main className="home">
      <Banner />
      <LodgingList data={data} />
    </main>
  );
}
