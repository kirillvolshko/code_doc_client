import { BaseQueryParams } from "../baseQuery";

export const authService = BaseQueryParams("auth", ["USER"]).injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => ({
        url: "/auth/get-me",
        method: "GET",
      }),

      providesTags: () => ["USER"],
    }),
    registration: builder.mutation({
      query: (body) => ({
        url: "/auth/registration",
        method: "POST",
        credentials: "include",
        body,
      }),
    }),
  }),
});
export const { useRegistrationMutation } = authService;
