import { ADD_REGION } from "../types";

const initialState = {
  region: {
    currentRegionShortcut: '',
    currentRegionName: ''
  },
};

export const location = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_REGION}`:
      return {
        ...state,
        region: {
          ...state.region,
          currentRegionShortcut: action.payload.currentRegionShortcut,
          currentRegionName: action.payload.currentRegionName
        }
      };
    default:
      return state;
  }
};
