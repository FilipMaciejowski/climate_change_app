import { ADD_COUNTRY } from "../types";

const initialState = {
  country: {
    currentCountryShortcut: '',
    currentCountryName: ''
  },
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_COUNTRY}`:
      return {
        ...state,
        country: {
          ...state.region,
          currentCountryShortcut: action.payload.currentCountryShortcut,
          currentCountryName: action.payload.currentCountryName
        }
      };
    default:
      return state;
  }
};
