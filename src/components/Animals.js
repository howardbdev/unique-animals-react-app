import React from 'react';
import AnimalCard from './AnimalCard'

const Animals = ({ animals }) => (
  animals.map(a => <AnimalCard key={a.id} animal={a}/>)
);

export default Animals;
