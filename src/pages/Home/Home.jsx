import React from 'react';
import { Banner } from '../../components/Banner';
import banner from '../../assets/banner.png';
import { LodgingList } from './LodgingList.jsx';
import data from '../../data/data.json';
import './Home.css';

export function Home() {
  return (
    <main className="home">
      <Banner path={banner} classImg="kasa-banner__img" nameImg="banner" />
      <LodgingList data={data} />
    </main>
  );
}
