import React from 'react';
import { useParams } from 'react-router-dom';
import { Gallery } from '../components/Gallery';
import { LodgingPresentation } from '../components/LodgingPresentation';
import { Accordion } from '../components/Accordion';
import '../styles/HousingSheet.css';
import data from '../data/data.json';

export function HousingSheet() {
  const params = useParams();
  const paramsId = params.id;
  const lodging = data.find((lodgingId) => lodgingId.id === paramsId);
  return (
    <div className="housingSheet">
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
    </div>
  );
}
