import { ADD_COUNTRY, ADD_TEST } from "../types";

const initialState = {
  country: {
    currentCountryShortcut: "",
    currentCountryName: ""
  },
  status: "",
  location: [],
};

export const location = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case `${ADD_COUNTRY}`:
      return {
        ...state,
        country: {
          ...state.country,
          currentCountryShortcut: action.payload.currentCountryShortcut,
          currentCountryName: action.payload.currentCountryName
        }
      };
    case `${ADD_TEST}_PENDING`:
      return {
        ...state,
        status: "PENDING"
      };
    case `${ADD_TEST}_REJECTED`:
      return {
        ...state,
        status: "REJECTED"
      };
    case `${ADD_TEST}_FULLFILLED`:
      return {
        ...state,
        status: "FULLFILLED",
        location: action.payload
      };

    default:
      return state;
  }
};
