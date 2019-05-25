import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { followerReducer } from "./followers/reducers";
import { QueryReducer } from "./query/reducers";

const rootReducer = combineReducers({   
    followers: followerReducer,
    query: QueryReducer
});

export type AppState = ReturnType<typeof rootReducer>;
const apiKey = process.env.REACT_APP_API_KEY;

export default function configureStore() {
  const middlewares = [thunkMiddleware.withExtraArgument({ apiKey })];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}