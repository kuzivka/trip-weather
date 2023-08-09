import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  trips: [
    {
      id: 'kyiv',
      cityName: 'Kyiv',
      startDate: '2023-08-23',
      endDate: '2023-08-24',
    },
  ],
  searchQuery: '',
  chosenTrip: 'kyiv',
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
