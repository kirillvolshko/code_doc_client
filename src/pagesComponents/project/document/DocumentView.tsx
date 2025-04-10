"use client";
import { useSearchParams } from "next/navigation";
import { useErrorHandler } from "@/hooks/useErrorHandler";
import { useGetDocumentByIdQuery } from "@/store/documents/documentService";
import { NoDataMessage } from "@/components/common/ui/NoDataMessage";
import { Send } from "lucide-react";
import { Spinner } from "@/components/common/ui/Spinner";
import DocumentInformation from "./DocumentInformation";
import CommentsView from "../comments/CommentsView";

const DocumentView = () => {
  const searchParams = useSearchParams();
  const docId = searchParams?.get("doc") || null;

  const { data, error, isLoading } = useGetDocumentByIdQuery(docId, {
    skip: !docId,
  });
  useErrorHandler(error);
  if (isLoading) return <Spinner />;
  if (!docId)
    return (
      <NoDataMessage
        icon={<Send />}
        title="Select an existing code document or create a new one."
        className="flex flex-col justify-center h-[calc(100vh-97.5px)] items-center text-white font-semibold"
      />
    );

  return (
    <div className="flex flex-row gap-5 p-[30px] max-h-[calc(100vh-157.5px)] text-white">
      {data && <DocumentInformation data={data} />}
      <CommentsView />
    </div>
  );
};
export default DocumentView;
