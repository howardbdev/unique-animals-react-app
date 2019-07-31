import React from 'react';

const AnimalCard = ({ animal }) => (
  <div className="AnimalCard component">
    <img alt={animal.name} src={animal.image_url}/>
    <h2>{animal.name}</h2>
    <h4>{animal.fake_scientific_name}</h4>
    <p>{animal.description}</p>
  </div>
);

export default AnimalCard;
