import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

import { BlogsType, UploadBlogType, PostSubmit } from 'types/Blogs'

export const blogsApi = createApi({
   reducerPath: 'blogsService',
   tagTypes: ['Blogs'],
   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BLOGS_URL }),

   endpoints: (builder) => ({
      getBlogs: builder.query<BlogsType[], void>({
         query: () => ({
            url: '/items'
         }),
         transformResponse: (response: BlogsType[]): BlogsType[] => response.slice().sort((a, b) => Number(b.id) - Number(a.id)),
         providesTags: ['Blogs'] 
      }),
      uploadBlog: builder.mutation<UploadBlogType, PostSubmit>({
         query: (post) => ({
            url: '/items',
            method: 'POST',
            body: post
         }),
         invalidatesTags: ['Blogs']
      })
   })
})

export const { useGetBlogsQuery, useUploadBlogMutation } = blogsApi