import createHistory from "history/createBrowserHistory";
import { connectRouter } from "connected-react-router";
import { routerMiddleware } from "react-router-redux";
import createRematchPersist from '@rematch/persist'

import { init } from "@rematch/core";

import * as models from "./models";

export const history = createHistory();
const middleware = routerMiddleware(history);

const persistPlugin = createRematchPersist({ 	version: 2, whitelist: ['persisted'] })

const store = init({
  models,
  plugins: [persistPlugin],
  redux: {
    reducers: {
      router: connectRouter(history)
    },
    middlewares: [middleware]
  }
});

export default store;
