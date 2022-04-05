import { createStore } from "redux";
import { reducer } from "./Reducer";

// export const store = createStore(reducer, {
//     count: 0,
//     todo : ["read" , "ride"],
// })

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
