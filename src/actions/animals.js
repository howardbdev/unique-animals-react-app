// what is an action creator?
// a function that returns an action
import { animals } from "../animals"


// mimic a fetch request to get the animals
export const getAnimals = () => {
  return {
    type: "GET_ANIMALS",
    animals: animals
  }
}
