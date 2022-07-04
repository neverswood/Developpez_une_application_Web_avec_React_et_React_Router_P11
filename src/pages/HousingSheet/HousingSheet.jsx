import React from 'react';
import { useParams } from 'react-router-dom';
import { Gallery } from '../../components/Gallery.jsx';
import { LodgingPresentation } from './LodgingPresentation';
import { Collapse } from '../../components/Collapse';
import './HousingSheet.css';
import data from '../../data/data.json';

export function HousingSheet() {
  const params = useParams();
  const paramsId = params.id;
  const lodging = data.find((lodgingId) => lodgingId.id === paramsId);
  return (
    <main className="housingSheet">
      <Gallery pictures={lodging.pictures} />
      <LodgingPresentation lodging={lodging} />
      <Collapse
        title="Description"
        content={<p>{`${lodging.description}`}</p>}
      />
      <Collapse
        title="Équipements"
        content={
          <ul>
            {lodging.equipments.map((equipment) => {
              return <li key={equipment}>{equipment}</li>;
            })}
          </ul>
        }
      />
    </main>
  );
}
