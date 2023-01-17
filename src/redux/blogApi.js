import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ['Post'],
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
      providesTags: (result, error, arg) => 
        result
          ? [...result.articles.map(({ id }) => ({ type: 'Post', id })), 'Post']
          : ['Post'],
    }),
    getArticle: build.query({
      query: (slug) =>  {
        return `articles/${slug}`
      },
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
      }),
      invalidatesTags: ['Post']
    }),
    createArticle: build.mutation({
      query: body => ({
        url: 'articles',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Post']
    }),
    editArticle: build.mutation({
      query: (query) => {
        return {
          url: `articles/${query.slug}`,
          method: 'PUT',
          body: query.body
        }
      },
      invalidatesTags: ['Post']
    }),
    deleteArticle: build.mutation({
      query: (slug) => {
        return {
          url: `articles/${slug}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: ['Post']
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
  useEditArticleMutation,
  useDeleteArticleMutation
} = blogApi 