import React, { Component } from 'react';

class NewAnimal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      fake_scientific_name: "",
      image_url: "",
      description: ""
    }
  }

  handleChange = event => {
    // I want to update the correct state form whichever
    // input the user changes
    // what information do I need to update the state
    const { name, value } = event.target
    // the above line is the same as the two following lines..
    // const name = event.target.name
    // const value = event.target.value
    // now let's change the state:
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    // what needs to happen here to create a new animal??
    event.preventDefault()
    // what information is needed to create an animal?
    this.props.createAnimal(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="name"
          name="name"
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <input
          placeholder="fake_scientific_name"
          name="fake_scientific_name"
          type="text"
          onChange={this.handleChange}
          value={this.state.fake_scientific_name}
        />
        <input
          placeholder="image_url"
          name="image_url"
          type="text"
          onChange={this.handleChange}
          value={this.state.image_url}
        />
        <input
          placeholder="description"
          name="description"
          type="text"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="submit"
          value="Create Animal"
        />
      </form>
    );
  }

}

export default NewAnimal;

// t.string "name"
// t.string "fake_scientific_name"
// t.string "image_url"
// t.string "description"
