import React from 'react';
import './App.css';
import Animals from "./components/Animals"
import NewAnimal from "./components/NewAnimal"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    // redux: this.props.getAnimals()
    fetch("http://localhost:3001/animals")
      .then(r => r.json())
      .then(animals => this.setState({
        animals
      }))
  }

  createAnimal = animal => {
    this.setState({
      animals: this.state.animals.concat(animal)
    })
    // redux: this.props.creatAnimals()
    fetch("http://localhost:3001/animals", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(animal)
    })
    //   .then(r => r.json())
    //   .then(animal => {
    //
    //     this.setState({
    //       animals: this.state.animals.concat(animal)
    //   })
    // })
  }

  render() {
    return (
      <div className="App component">
        <NewAnimal createAnimal={this.createAnimal}/>
        <Animals animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
