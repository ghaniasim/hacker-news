import {
  Middleware,
  combineReducers,
  createStore,
  applyMiddleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { watcherSaga } from "../sagas";

import { topStoriesReducer } from "./reducers";
import { State as StoriesState } from "./reducers/topstories";

export interface ApplicationState {
  app: StoriesState;
}

const rootReducer = combineReducers<ApplicationState>({
  app: topStoriesReducer,
});

const sagaMiddleware = createSagaMiddleware();

export function createMiddleware(): Middleware[] {
  const middleware: Middleware[] = [sagaMiddleware];
  middleware.push(createLogger({ collapsed: true, timestamp: false }));
  return middleware;
}

const store = createStore(rootReducer, {}, applyMiddleware(...createMiddleware()));

sagaMiddleware.run(watcherSaga);

export default store;
