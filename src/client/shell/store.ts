import { configureStore } from '@reduxjs/toolkit'
import { takeLatest, all, fork } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './reducers';
import allSagas from './sagas';

function createWatcher(actionSagaPair: any[]) {
  return function* () {
    yield takeLatest(actionSagaPair[0], actionSagaPair[1]);
  };
}
function returnFork(actionFunction: any) {
  return fork(actionFunction);
}

const sagaWithWatcher = allSagas.map(createWatcher);

function* rootSaga() {
  yield all(sagaWithWatcher.map(returnFork));
}

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST'],
        // Ignore these field paths in all actions
        // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        // ignoredPaths: ['items.dates'],
      },
    }).concat(middleware),
})

export const sagaTaskList = sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>
