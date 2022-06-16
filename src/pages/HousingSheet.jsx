import React from 'react';
import { useParams } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { LodgingPresentation } from '../components/LodgingPresentation';
import data from '../data/data.json';

export function HousingSheet() {
  const params = useParams();
  const paramsId = params.id;
  const lodging = data.find((lodgingId) => lodgingId.id === paramsId);
  console.log(lodging);
  return (
    <div>
      <Gallery pictures={lodging.pictures} />
      <LodgingPresentation lodging={lodging} />
    </div>
  );
}
