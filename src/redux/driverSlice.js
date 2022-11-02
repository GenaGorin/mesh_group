import {createSlice} from '@reduxjs/toolkit';
import {api} from '../api/api';

const initialState = {
  drivers: [],
  isFetching: true,
  currentPage: 1,
  totalCount: 0,
  error: null,
};

export const driversSlice = createSlice({
  name: 'driversSlice',
  initialState,
  reducers: {
    setDrivers: (state, action) => {
      state.drivers = action.payload.DriverTable.Drivers;
      state.isFetching = false;
      state.totalCount = action.payload.total;
      state.error = null;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFetching: state => {
      state.isFetching = true;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    },
  },
});

export const {setDrivers, setPage, setFetching, setError} =
  driversSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default driversSlice.reducer;

export function getDrivers(page, limit = 10) {
  return async dispatch => {
    try {
      dispatch(setFetching());
      const offset = page * limit - limit;
      const response = await api.getDrivers(limit, offset);
      dispatch(setDrivers(response.data.MRData));
    } catch (e) {
      dispatch(setError(e.toJSON().message));
    }
  };
}
