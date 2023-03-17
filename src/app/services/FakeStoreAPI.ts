import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product } from "../../types";

const baseUrl = "https://fakestoreapi.com";

const createRequest = (url: string) => ({ url });

export const fakeStoreApi = createApi({
    reducerPath: 'fakeStoreApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: builder => ({
        // Retrieve List of all Products
        getProducts: builder.query<Product[], void>({
            query: () => createRequest(`/products`)
        }),

        // Get a Single Product details
        getProductDetails: builder.query<Product, string>({
            query: (id) => createRequest(`/products/${id}`)
        }),

        // Get All Product Categories
        getCategories: builder.query<string[], void>({
            query: () => createRequest(`/products/categories`)
        }),

        // Get All Products from a Category
        getCategoryProducts: builder.query<Product[], string>({
            query: (category) => createRequest(`/products/category/${category}`)
        })
    })
});

export const { useGetProductsQuery, useGetProductDetailsQuery, useGetCategoriesQuery, useGetCategoryProductsQuery } = fakeStoreApi;