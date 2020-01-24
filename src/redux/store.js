import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { location } from './reducers/locationReducer';
import promiseMiddleware from 'redux-promise-middleware';


 const rootreducer = combineReducers(
   {location: location}
 )

const store = createStore(
  rootreducer,
  compose(
    applyMiddleware(thunk, promiseMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;