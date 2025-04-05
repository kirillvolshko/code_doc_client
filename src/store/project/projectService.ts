import { IProjectResponse } from "@/types/project";
import { BaseQueryParams } from "../baseQuery";

export const projectService = BaseQueryParams("project", [
  "PROJECT",
]).injectEndpoints({
  endpoints: (builder) => ({
    getProject: builder.query<IProjectResponse[], string | null>({
      query: (userId) => ({
        url: `/project-user/${userId}`,
        method: "GET",
      }),
      providesTags: () => ["PROJECT"],
    }),

    createProject: builder.mutation({
      query: (body) => ({
        url: "/project",
        method: "POST",
        body,
      }),
      invalidatesTags: ["PROJECT"],
    }),
  }),
});
export const { useCreateProjectMutation, useGetProjectQuery } = projectService;
