import {createSlice} from '@reduxjs/toolkit';
import {api} from '../api/api';

const initialState = {
  races: [],
  isFetching: true,
  error: null,
};

export const racesSlice = createSlice({
  name: 'racesSlice',
  initialState,
  reducers: {
    setRaces: (state, action) => {
      state.races = action.payload.RaceTable.Races;
      state.isFetching = false;
      state.error = null;
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

export const {setRaces, setFetching, setError} = racesSlice.actions;

//export const selectCount = (state: RootState) => state.app

export default racesSlice.reducer;

export function getRaces(racerId) {
  return async dispatch => {
    try {
      dispatch(setFetching());
      const response = await api.getRacers(racerId);
      dispatch(setRaces(response.data.MRData));
    } catch (e) {
      dispatch(setError(e.toJSON().message));
    }
  };
}
