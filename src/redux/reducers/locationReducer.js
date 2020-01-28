import { ADD_COUNTRY, ADD_TEST, FETCH_INFO_ABOUT_COUNTRY, FETCH_CLIMATE_DATA} from "../types";

const initialState = {
  country: {
    currentCountryShortcut: "",
    currentCountryName: "",
    currentCountryShortcutISO3: "",
    details: {},
    climate: {}
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
          currentCountryName: action.payload.currentCountryName,
          currentCountryShortcutISO3: action.payload.currentCountryShortcutISO3
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
    case `${FETCH_CLIMATE_DATA}_PENDING`:
      return {
        ...state,
        status: "PENDING"
      };
    case `${FETCH_CLIMATE_DATA}_REJECTED`:
      return {
        ...state,
        status: "REJECTED"
      };
    case `${FETCH_CLIMATE_DATA}_FULFILLED`:
      return {
        ...state,
        status: "FULFILLED",
        country: {
          ...state.country,
          climate: action.payload
        }
      };

    default:
      return state;
  }
};
