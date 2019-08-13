import React, { Component } from 'react';

class NewAnimal extends Component {
  // state = {
  //   name: "",
  //   fake_scientific_name: "",
  //   description: "",
  //   image_url: ""
  // }

  constructor(props) {
    super(props)
    // what state should we have here?
    this.state = {
      name: "",
      fake_scientific_name: "",
      description: "",
      image_url: ""
    }
  }

  handleChange = event => {
    // I've gotten to this callback, now what?
    // const name = event.target.name
    // const value = event.target.value
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createAnimal(this.state)
  }

  // what is missing from the form below?
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          placeholder="name"
          name="name"
          type="text"
          value={this.state.name}
        />
        <input
          onChange={this.handleChange}
          placeholder="fake_scientific_name"
          name="fake_scientific_name"
          type="text"
          value={this.state.fake_scientific_name}
        />
        <input
          onChange={this.handleChange}
          placeholder="image_url"
          name="image_url"
          type="text"
          value={this.state.image_url}
        />
        <input
          onChange={this.handleChange}
          placeholder="description"
          name="description"
          type="text"
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
