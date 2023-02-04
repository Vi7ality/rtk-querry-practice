import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_ENDPOINT = '/Comments';
const BASE_URL = 'https://63d81f54afbba6b7c94afa01.mockapi.io/phonebook/';

export const commentApi = createApi({
  reducerPath: 'comments',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ['Comments'],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ['Comments']
    }),
    addComment: builder.mutation({
      query: value => ({
        url: API_ENDPOINT,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Comments'],
    }),
    updateComment: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Comments'],
    })
  })
});


export const { useGetCommentsQuery, useAddCommentMutation, useUpdateCommentMutation} = commentApi;


