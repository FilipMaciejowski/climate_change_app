import { ADD_COUNTRY } from "../types";

const initialState = {
  currentCountry: ""
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_COUNTRY}`:
      return {
        ...state,
        currentCountry: action.payload
      };
      default:
        return state;
  }
};

export default locationReducer; 
