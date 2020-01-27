import { ADD_COUNTRY, ADD_TEST, FETCH_INFO_ABOUT_COUNTRY} from "../types";

const initialState = {
  country: {
    currentCountryShortcut: "",
    currentCountryName: "",
    details: {}
  },
  status: "",
  location: {},
};

export const location = (state = initialState, action) => {
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
    case `${ADD_TEST}_FULFILLED`:
      return {
        ...state,
        status: "FULFILLED",
        location: action.payload
      };
    case `${FETCH_INFO_ABOUT_COUNTRY}_PENDING`:
      return {
        ...state,
        status: "PENDING"
      };
    case `${FETCH_INFO_ABOUT_COUNTRY}_REJECTED`:
      return {
        ...state,
        status: "REJECTED"
      };
    case `${FETCH_INFO_ABOUT_COUNTRY}_FULFILLED`:
      return {
        ...state,
        status: "FULFILLED",
        country: {
          ...state.country,
          details: action.payload
        }
      };

    default:
      return state;
  }
};
