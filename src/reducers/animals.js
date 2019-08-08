// create or import a reducer
const initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_ANIMALS":
      return action.animals
    case "CREATE_ANIMAL_SUCCESS":
      return state.concat(action.animal)
    default:
      return state;
  }
}
