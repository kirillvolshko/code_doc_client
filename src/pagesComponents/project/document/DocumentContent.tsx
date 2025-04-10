"use client";

import { Spinner } from "@/components/common/ui/Spinner";
import { useEffect, useState } from "react";

const DocumentContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col gap-5 rounded-md p-[30px] bg-gradient-to-r from-slate-500 to-slate-800 max-h-[calc(100vh-280px)] overflow-y-auto">
      <div>
        <p className="text-[20px] font-semibold">File name</p>
        <p>{title}</p>
      </div>
      <div>
        <p className="text-[20px] font-semibold">File description</p>
        {isClient ? (
          <p dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};
export default DocumentContent;
