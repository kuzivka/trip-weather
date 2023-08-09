import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weather.visualcrossing.com',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (city) =>
        `/VisualCrossingWebServices/rest/services/timeline/${city}?include=fcst%2Cobs%2Chistfcst%2Cstats%2Ccurrent&key=YYXNHEGG85LVFHTTRMTML7AGY&options=beta&contentType=json`,
    }),
    getForecast: builder.query({
      query: (
        city
        
    ) => `/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=YYXNHEGG85LVFHTTRMTML7AGY&contentType=json`,
    }),
    // refetchOnMountOrArgChange: true,
  }),
});

export const { useGetWeatherQuery, useGetForecastQuery } = weatherApi;
