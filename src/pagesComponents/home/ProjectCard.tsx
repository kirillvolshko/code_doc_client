import { IProjectResponse } from "@/types/project";
import Link from "next/link";

type ProjectCardProps = {
  data: IProjectResponse;
};

const ProjectCard = ({ data }: ProjectCardProps) => {
  return (
    <Link
      href={`/project/${data.id}`}
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3"
    >
      <div className="border text-white border-white rounded-md p-[30px] text-center hover:cursor-pointer hover:bg-primary hover:scale-105 transition-colors duration-700 ease-in-out">
        <p className="text-xl font-semibold">{data.name}</p>
      </div>
    </Link>
  );
};
export default ProjectCard;
