import { BaseQueryParams } from "../baseQuery";

export const commentService = BaseQueryParams("comments", [
  "COMMENTS",
]).injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query({
      query: (docId) => ({
        url: `/comment/${docId}`,
        method: "GET",
      }),
      providesTags: () => ["COMMENTS"],
    }),
    createComments: builder.mutation({
      query: (body) => ({
        url: "/comment",
        method: "POST",
        body,
      }),
      invalidatesTags: ["COMMENTS"],
    }),
    editComments: builder.mutation({
      query: ({ body, id }) => ({
        url: `/comment/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["COMMENTS"],
    }),
    deleteComments: builder.mutation({
      query: (id) => ({
        url: `/comment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["COMMENS"],
    }),
  }),
});
export const {
  useCreateCommentsMutation,
  useGetCommentsQuery,
  useEditCommentsMutation,
  useDeleteCommentsMutation,
} = commentService;
