import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://blog.kata.academy/api/',
    prepareHeaders: (headers, {getState}) => {
      const token = getState()?.reducer?.user?.token
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }      
      return headers
    }
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
    }),
    updateAccount: build.mutation({
      query: body => ({
        url: 'user',
        method: 'PUT',
        body
      })
    }),
    createArticle: build.mutation({
      query: body => ({
        url: 'articles',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetArticlesListQuery, 
  useGetArticleQuery,
  useLoginAccountMutation,
  useCreateAccountMutation,
  useGetAccountQuery,
  useUpdateAccountMutation,
  useCreateArticleMutation,
} = blogApi 