// import { createStore } from "redux";
// import { reducer } from "./Reducer";

// // export const store = createStore(reducer, {
// //     count: 0,
// //     todo : ["read" , "ride"],
// // })

// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );


import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import { loginReducer } from "./Login/Reducer.jsx"

import { Cartreducer } from "./Cart/Reducer.js";

// import { airportReducer } from "./Airport/Reducer"

// import { flightReducer } from "./Flights/Reducer.jsx";

import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const middleware = [thunk];

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

const rootReducer = combineReducers({
  login: loginReducer,
  cart : Cartreducer
});

export const store = createStore(rootReducer, enhancer);