"use client";

const DocumentContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-5 rounded-md p-[30px]  bg-gradient-to-r from-slate-500 to-slate-800 max-h-[calc(100vh-280px)] overflow-y-auto">
      <div>
        <p className="text-[20px] font-semibold">File name</p>
        <p>{title}</p>
      </div>
      <div>
        <p className="text-[20px] font-semibold">File description</p>

        <p dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
export default DocumentContent;
