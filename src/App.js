import React from 'react';
import './App.css';
import CenterContainer from "./components/CenterContainer"

import { animals } from "./animals"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    // mocking a GET request
    this.setState({
      animals
    })
  }

  createAnimal = animal => {
    // mocking a POST request
    this.setState({
      anmials: animals.concat(animal)
    })
  }

  render() {
    return (
      <div className="App component">
        <CenterContainer
          animals={this.state.animals}
          createAnimal={this.createAnimal}
        />
      </div>
    );
  }
}

export default App;
