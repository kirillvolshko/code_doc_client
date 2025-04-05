import { ICommentRequest, ICommentResponse } from "@/types/comment";
import { BaseQueryParams } from "../baseQuery";

export const commentService = BaseQueryParams("comments", [
  "COMMENTS",
]).injectEndpoints({
  endpoints: (builder) => ({
    getComments: builder.query<ICommentResponse[], string>({
      query: (docId) => ({
        url: `/comment/${docId}`,
        method: "GET",
      }),
      providesTags: () => ["COMMENTS"],
    }),
    createComments: builder.mutation<unknown, ICommentRequest>({
      query: (body) => ({
        url: "/comment",
        method: "POST",
        body,
      }),
      invalidatesTags: ["COMMENTS"],
    }),
    editComments: builder.mutation<unknown, { content: string; id: string }>({
      query: ({ content, id }) => ({
        url: `/comment/${id}`,
        method: "PATCH",
        body: {
          content,
        },
      }),
      invalidatesTags: ["COMMENTS"],
    }),
    deleteComments: builder.mutation<unknown, string>({
      query: (id) => ({
        url: `/comment/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["COMMENTS"],
    }),
  }),
});
export const {
  useCreateCommentsMutation,
  useGetCommentsQuery,
  useEditCommentsMutation,
  useDeleteCommentsMutation,
} = commentService;
