import {
  IDocumentRequestCreate,
  IDocumentRequestEdit,
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
        url: "/document-code/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["DOCUMENTS"],
    }),
    editDocument: builder.mutation<
      unknown,
      { body: IDocumentRequestEdit; docId: string }
    >({
      query: ({ body, docId }) => ({
        url: `/document-code/${docId}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["DOCUMENT"],
    }),
  }),
});
export const {
  useCreateDocumentMutation,
  useGetDocumentsQuery,
  useEditDocumentMutation,
  useGetDocumentByIdQuery,
} = documentService;
