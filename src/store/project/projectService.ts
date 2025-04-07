import {
  IAddUserRequest,
  IProjectResponse,
  IUsersResponse,
} from "@/types/project";
import { BaseQueryParams } from "../baseQuery";

export const projectService = BaseQueryParams("project", [
  "PROJECT",
  "PROJECT_SETTINGS",
]).injectEndpoints({
  endpoints: (builder) => ({
    getProject: builder.query<IProjectResponse[], string | null>({
      query: (userId) => ({
        url: `/project-user/${userId}`,
        method: "GET",
      }),
      providesTags: () => ["PROJECT"],
    }),
    getProjectById: builder.query<IProjectResponse[], string>({
      query: (id) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
    }),
    getUsersByProject: builder.query<IUsersResponse[], string>({
      query: (id) => ({
        url: `/project-users/${id}`,
        method: "GET",
      }),
      providesTags: () => ["PROJECT_SETTINGS"],
    }),
    addUserToProject: builder.mutation<unknown, IAddUserRequest>({
      query: (body) => ({
        url: "/project-user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["PROJECT_SETTINGS"],
    }),
    createProject: builder.mutation({
      query: (body) => ({
        url: "/project",
        method: "POST",
        body,
      }),
      invalidatesTags: ["PROJECT"],
    }),
    deleteUserFromProject: builder.mutation({
      query: (id) => ({
        url: `/project-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PROJECT_SETTINGS"],
    }),
  }),
});
export const {
  useCreateProjectMutation,
  useGetProjectQuery,
  useGetProjectByIdQuery,
  useGetUsersByProjectQuery,
  useAddUserToProjectMutation,
  useDeleteUserFromProjectMutation,
} = projectService;
