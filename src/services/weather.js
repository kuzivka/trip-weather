import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const weatherApi = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (
        city
      ) => `${city}/today?unitGroup=metric&include=days&key=YYXNHEGG85LVFHTTRMTML7AGY&contentType=
      json`,
    }),
  }),
});

export const { useGetWeather } = weatherApi;
