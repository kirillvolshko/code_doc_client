import { ActionButton } from "@/components/common/ui/ActionButton";
import { DialogWindow } from "@/components/common/ui/DialogWindow";
import { parsedDate } from "@/utils/parsedDate";
import { Clock, Pencil, User } from "lucide-react";
import { EditDocumentForm } from "../forms/EditDocumentForm";

export const DocumentFooter = ({
  editor,
  date,
  title,
  content,
}: {
  editor: string | undefined;
  date: string | null;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex justify-between items-center mt-auto">
      <div className="flex gap-5">
        {editor && date ? (
          <>
            <div className="flex items-center gap-2">
              <User />
              <p>{editor ? editor : "Not changed yet document"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <p>{date ? parsedDate(date) : "Not changed yet document"}</p>
            </div>
          </>
        ) : (
          <p>Not changed yet document</p>
        )}
      </div>
      <DialogWindow
        triggerComponent={
          <ActionButton icon={<Pencil />} title="Edit document" />
        }
        content={<EditDocumentForm title={title} content={content} />}
      />
    </div>
  );
};
