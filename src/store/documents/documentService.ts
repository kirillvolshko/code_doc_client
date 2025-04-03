import {
  IDocumentRequestCreate,
  IDocumentResponse,
  IDocumentsResponse,
} from "@/types/document";
import { BaseQueryParams } from "../baseQuery";

export const documentService = BaseQueryParams("document", [
  "DOCUMENTS",
  "DOCUMENT",
]).injectEndpoints({
  endpoints: (builder) => ({
    getDocuments: builder.query<IDocumentsResponse[], string | null>({
      query: (orgId) => ({
        url: `/documents-code/${orgId}`,
        method: "GET",
      }),
      providesTags: () => ["DOCUMENTS"],
    }),
    getDocumentById: builder.query<IDocumentResponse, string | null>({
      query: (docId) => ({
        url: `/document-code/${docId}`,
        method: "GET",
      }),
      providesTags: () => ["DOCUMENT"],
    }),
    createDocument: builder.mutation<unknown, IDocumentRequestCreate>({
      query: (body) => ({
        url: "/documents-code/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["DOCUMENTS"],
    }),
  }),
});
export const {
  useCreateDocumentMutation,
  useGetDocumentsQuery,
  useGetDocumentByIdQuery,
} = documentService;
