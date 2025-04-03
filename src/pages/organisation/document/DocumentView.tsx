"use client";
import { useSearchParams } from "next/navigation";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useGetDocumentByIdQuery } from "@/store/documents/documentService";

export const DocumentView = () => {
  const searchParams = useSearchParams();
  const docId = searchParams?.get("doc") || null;

  const { data, error } = useGetDocumentByIdQuery(docId, {
    skip: !docId,
  });
  useErrorHandler(error);
  if (!docId)
    return <p className="flex flex-col justify-center items-center h-full"></p>;
  return <div>{data?.content}</div>;
};
