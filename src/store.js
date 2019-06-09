import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducers from '@reducers';
import sagas from '@sagas';

// Build the Middleware
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers,
  composeWithDevTools(
    compose(
      applyMiddleware(
        sagaMiddleware,
        createLogger(),
      ),
    ),
  ),
);

sagaMiddleware.run(sagas);

export default store;
