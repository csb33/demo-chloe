////LOGIC LIVES HERE

////Imports initial state from redux folder
import { initialState } from "./initialState";

////Pure function (reducer function)
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      ////copies old state and updates
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      ////copies old state and updates
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
