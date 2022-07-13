import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": "66e17f9775msh52ab94609039378p183539jsned52ecf69948",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl =
  "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query:(coinId)=>createRequest(`/coins/${coinId}`),
    })
  }),
});

export const{
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
} = cryptoApi;