import { BaseQueryParams } from "../baseQuery";

export const organisationSerivce = BaseQueryParams("organisation", [
  "ORG",
]).injectEndpoints({
  endpoints: (builder) => ({
    createOrganisation: builder.mutation({
      query: (body) => ({
        url: "/organisation",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useCreateOrganisationMutation } = organisationSerivce;
