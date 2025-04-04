import { IDocumentResponse } from "@/types/document";
import { DocumentContent } from "./DocumentContent";
import { DocumentHeader } from "./DocumentHeader";
import { DocumentFooter } from "./DocumentFooter";

export type DocumentContent = {
  data: IDocumentResponse;
};
export const DocumentInformation = ({ data }: DocumentContent) => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-130.5px)]">
      <div className="flex-grow flex flex-col gap-10">
        <DocumentHeader creator={data.creator.name} date={data.created_at} />
        <DocumentContent title={data.title} content={data.content} />
      </div>
      <DocumentFooter
        editor={data.editor?.name}
        date={data.updated_at}
        title={data.title}
        content={data.content}
      />
    </div>
  );
};
