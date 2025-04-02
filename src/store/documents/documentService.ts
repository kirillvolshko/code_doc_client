import { IDocumentResponse } from "@/types/document";
import { BaseQueryParams } from "../baseQuery";

export const documentService = BaseQueryParams("document", [
  "DOC",
]).injectEndpoints({
  endpoints: (builder) => ({
    getDocuments: builder.query<IDocumentResponse[], string | null>({
      query: (orgId) => ({
        url: `/documents-code/${orgId}`,
        method: "GET",
      }),
      providesTags: ["DOC"],
    }),
    createDocument: builder.mutation<unknown, IDocumentResponse>({
      query: (body) => ({
        url: "/documents-code/",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useCreateDocumentMutation, useGetDocumentsQuery } =
  documentService;
