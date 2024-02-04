import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => ({
        url: "/pokemon",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPokemonByNameQuery } = baseApi;
