import { IProjectResponse } from "@/types/project";
import Link from "next/link";

type ProjectCardProps = {
  data: IProjectResponse;
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Link href={`/project/${data.id}`}>
      <div className="border border-black rounded-md p-[30px] text-center hover:cursor-pointer">
        <p className="text-xl font-semibold">{data.name}</p>
      </div>
    </Link>
  );
};
