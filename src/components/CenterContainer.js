import React from 'react';
import Animals from "./Animals"
import NewAnimal from "./NewAnimal"

const CenterContainer = ({
  createAnimal,
  animals
}) => (
  <div className="CenterContainer">
    <NewAnimal />
    <Animals />
  </div>
);

export default CenterContainer;
