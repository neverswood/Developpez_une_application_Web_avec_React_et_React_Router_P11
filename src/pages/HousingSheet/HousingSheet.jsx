import React from 'react';
import { useParams } from 'react-router-dom';
import { Gallery } from './Gallery.jsx';
import { LodgingPresentation } from './LodgingPresentation';
import { Accordion } from '../../components/Accordion';
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
      <Accordion
        title="Description"
        content={
          <div className="description">
            <p className="descriptionP">{`${lodging.description}`}</p>
          </div>
        }
      />
      <Accordion
        title="Équipements"
        content={
          <ul>
            {lodging.equipments.map((equipment) => {
              return <li>{equipment}</li>;
            })}
          </ul>
        }
      />
    </main>
  );
}
