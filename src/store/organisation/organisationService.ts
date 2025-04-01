import { IOrganisationResponse } from "@/types/organisation";
import { BaseQueryParams } from "../baseQuery";

export const organisationSerivce = BaseQueryParams("organisation", [
  "ORG",
]).injectEndpoints({
  endpoints: (builder) => ({
    getOrganisation: builder.query<IOrganisationResponse, string>({
      query: (id) => ({
        url: `/organisation-user/${id}`,
        method: "GET",
      }),
    }),
    createOrganisation: builder.mutation({
      query: (body) => ({
        url: "/organisation",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useCreateOrganisationMutation, useGetOrganisationQuery } =
  organisationSerivce;
