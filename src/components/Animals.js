import React, { useState } from 'react';
import AnimalCard from './AnimalCard'

const Animals = ({ animals }) => {
  // React hooks:
  const [myName, setMyName] = useState("Howard")

  return animals.map(a => <AnimalCard key={a.id} animal={a}/>)
};

export default Animals;
