import { BaseApi } from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./index";

const baseQueryWithReAuth = fetchBaseQuery({
  baseUrl: BaseApi,
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).auth;
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  },
});

export const BaseQueryParams = (reducerPath: string, tags: string[]) => {
  const baseQuery = createApi({
    baseQuery: baseQueryWithReAuth,
    endpoints: () => ({}),
    reducerPath,
    tagTypes: tags?.length ? tags : [],
  });

  return baseQuery;
};
