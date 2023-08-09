import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { weatherApi } from '../services/weather';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tripReducer from './reducer';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  [weatherApi.reducerPath]: weatherApi.reducer,
  trip: tripReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      weatherApi.middleware
    ),
});

setupListeners(store.dispatch);
