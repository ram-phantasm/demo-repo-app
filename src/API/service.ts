import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ProductModel } from "../model/productModel";

export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (build) => ({
    fetchProducts: build.query<ProductModel[], void>({
      query: () => "/products",
    }),
    addToCart:build.mutation<void, ProductModel>({
      query: (product) => ({
        url: '/carts',  
        method: 'POST',
        body: product
      }),
    }),
  }),
});

export const { useFetchProductsQuery, useAddToCartMutation } = productApi;