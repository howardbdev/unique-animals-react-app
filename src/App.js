import React from 'react';
import './App.css';
import Animals from "./components/Animals"
import NewAnimal from "./components/NewAnimal"

class App extends React.Component {
  constructor(props){
    console.log("in App, calling constructor")
    console.log("  --> props is", props)
    super(props)
    this.state = {
      animals: []
    }
  }
  static getDerivedStateFromProps(props, state) {
    console.log("in App, calling getDerivedStateFromProps")
    console.log("  --> props is", props)
    console.log("  --> state is", state)
    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("in App, calling shouldComponentUpdate")
    console.log("  --> nextProps is", nextProps)
    console.log("  --> nextState is", nextState)
    return true
  }

  componentDidMount() {
    // redux: this.props.getAnimals()
    console.log("in App, calling componentDidMount")
    fetch("http://localhost:3001/animals")
      .then(r => r.json())
      .then(animals => this.setState({
        animals
      }))
  }

  componentWillUnmount() {
    console.log("in App, calling componentWillUnmount")

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("in App, calling componentDidUpdate")
    console.log("  --> prevProps is", prevProps)
    console.log("  --> prevState is", prevState)
    console.log("  --> snapshot is", snapshot)
  }

  createAnimal = animal => {
    // redux: this.props.creatAnimals()
    fetch("http://localhost:3001/animals", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(animal)
    })
      .then(r => r.json())
      .then(animal => {
        console.log("the respose is ", animal)
        this.setState({
        animals: this.state.animals.concat(animal)
      })
    })
  }

  render() {
    console.log("in App, calling render")
    return (
      <div className="App component">
        <NewAnimal createAnimal={this.createAnimal}/>
        <Animals animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;
