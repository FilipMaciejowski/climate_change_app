import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { message } from "antd";
import { location } from "./reducers/locationReducer";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import logger from "redux-logger";

const rootReducer = combineReducers({
  location: location
});

const errorHandler = store => next => action => {
  const actionType = action.type;
  const actionTypeStatus = actionType.substr(actionType.lastIndexOf("_") + 1);

  if (actionTypeStatus === "REJECTED") {
    message.error("Error, try again later");
  }
  return next(action);
};

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, promiseMiddleware, logger, errorHandler))
);

export default store;
