export const DocumentContent = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
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
