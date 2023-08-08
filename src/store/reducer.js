import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [
    {
      id: 1,
      cityName: 'Kyiv',
      startDate: '08.08.2023',
      endDate: '15.08.2023',
    },
  ],
  searchQuery: '',
  chosenTrip: 1,
};

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    addTrip: (state, trip) => {
      state.trips.push(trip.payload);
    },
    searchTrip: (state, searchQuery) => {
      state.searchQuery = searchQuery.payload;
    },
    chooseTrip: (state, trip) => {
      state.chosenTrip = trip.payload;
    },
  },
});

export const { addTrip, searchTrip, chooseTrip } = tripSlice.actions;

export default tripSlice.reducer;
