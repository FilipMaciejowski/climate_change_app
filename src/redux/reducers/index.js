import { ADD_REGION } from "../types";

const initialState = {
  currentRegion: ""
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_REGION}`:
      return {
        ...state,
        currentRegion: action.payload
      };
      default:
        return state;
  }
};

export default locationReducer; 
