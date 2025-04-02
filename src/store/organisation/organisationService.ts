import { IOrganisationResponse } from "@/types/organisation";
import { BaseQueryParams } from "../baseQuery";

export const organisationService = BaseQueryParams("organisation", [
  "ORG",
]).injectEndpoints({
  endpoints: (builder) => ({
    getOrganisation: builder.query<IOrganisationResponse[], string | null>({
      query: (userId) => ({
        url: `/organisation-user/${userId}`,
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
  organisationService;
