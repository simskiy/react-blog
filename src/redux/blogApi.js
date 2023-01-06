import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.kata.academy/api/',
  }),
  endpoints: (build) => ({
    getArticlesList: build.query({
      query: (offset) => `articles?limit=5&offset=${offset}`,
    }),
    getArticle: build.query({
      query: (slug) =>  `articles/${slug}`
    }),
    loginAccount: build.mutation({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      })
    }),
    createAccount: build.mutation({
      query: (body) => ({
        url: 'users',
        method: 'POST',
        body,
      })
    }),
    getAccount: build.query({
      query: (body) => ({
        url: 'user',
        body,
      })
    })
  })
})

export const {
  useGetArticlesListQuery, 
  useGetArticleQuery,
  useLoginAccountMutation,
  useCreateAccountMutation,
  useGetAccountQuery
} = blogApi 