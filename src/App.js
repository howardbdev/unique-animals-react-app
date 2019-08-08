import React from 'react';
import './App.css';
import CenterContainer from "./components/CenterContainer"
import { connect } from 'react-redux'
import { getAnimals } from './actions/animals'

// I want to be able to add a new animal and persist it on the back end (create)
// What do I need to do?????
// - add an action creator - createAnimal <-- should be asynchronous -- returns a function that receives dispatch() as an argument
//   - ^^ this is where we will add a fetch request and persist to the db
// - add another action creator to actually update the Redux store once the server reponds appropriately
// -

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      animals: []
    }
  }

  componentDidMount() {
    // get my animals
    this.props.getAnimals()
  }

  createAnimal = animal => {
    // mocking a POST request
    console.log("create animal")
    this.setState({
      animals: this.state.animals.concat(animal)
    })
  }

  render() {
    return (
      <div className="App component">
        <CenterContainer
          createAnimal={this.createAnimal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    animals: state.animals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAnimals: ()=>dispatch(getAnimals())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
