import { parsedDate } from "@/utils/parsedDate";
import { Clock, User } from "lucide-react";

const DocumentHeader = ({
  date,
  creator,
}: {
  date: string;
  creator: string;
}) => {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <User />
        <p>{creator}</p>
      </div>
      <div className="flex items-center gap-2">
        <Clock />
        <p>Created date: {parsedDate(date)}</p>
      </div>
    </div>
  );
};
export default DocumentHeader;
