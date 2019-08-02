import React from 'react';
import AnimalCard from './AnimalCard'
import {connect} from 'react-redux'

const Animals = ({ animals }) => (
  animals ? animals.map(a => <AnimalCard key={a.id} animal={a}/>) : null
);

const mapStateToProps = ({ animals }) => {
  return ({
    animals
  })
}
export default connect(mapStateToProps)(Animals);
