import React from 'react';
import './App.css';
import CenterContainer from "./components/CenterContainer"
import { connect } from 'react-redux'
import { getAnimals } from './actions/animals'

class App extends React.Component {

  constructor(props){
    super(props)
    // this.state = {
    //   animals: []
    // }
  }

  componentDidMount() {
    // mocking a GET request
    // this.setState({
    //   animals
    // })

    // get my animals
    this.props.getAnimals()
  }

  createAnimal = animal => {
    // mocking a POST request
    console.log("create animal")
    // this.setState({
    //   animals: animals.concat(animal)
    // })
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
