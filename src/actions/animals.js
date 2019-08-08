// synchronous action

export const setAnimals = animals => {
  return {
    type: "SET_ANIMALS",
    animals
  }
}

export const createAnimalSuccess = animal => {
  return {
    type: "CREATE_ANIMAL_SUCCESS",
    animal
  }
}

// asynchronous actions

export const getAnimals = () => {
  return dispatch => {
    return fetch("http://localhost:3001/animals")
      .then(r => r.json())
      .then(animals => {
        dispatch(setAnimals(animals))
      })
  }
}

export const createAnimal = animalData => {
  return dispatch => {
    const animalJSON = {
      animal: animalData
    }
    return fetch("http://localhost:3001/animals", {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalJSON),
      method: "POST"
    })
      .then(r => r.json())
      .then(animals => {
        dispatch(createAnimalSuccess(animals))
      })
  }
}
