import {combineReducers, configureStore} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {driversSlice} from './driverSlice';
import {racesSlice} from './raceSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['drivers'],
};

const reducer = combineReducers({
  drivers: driversSlice.reducer,
  races: racesSlice.reducer,
});
const persistedReducers = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
