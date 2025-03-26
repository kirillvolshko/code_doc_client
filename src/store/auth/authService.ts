"use client";
import { BaseQueryParams } from "../baseQuery";

export const authService = BaseQueryParams("authUser", [
  "USER",
]).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["USER"],
    }),
    registration: builder.mutation({
      query: (body) => ({
        url: "/registration",
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["USER"],
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: "/refresh",
        method: "POST",
        credentials: "include",
        body,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});
export const { useRegistrationMutation, useLoginMutation, useRefreshMutation } =
  authService;
