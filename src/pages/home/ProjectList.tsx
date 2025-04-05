"use client";
import { useUserId } from "@/hooks/useUserId";
import { useGetProjectQuery } from "@/store/project/projectService";
import { ProjectCard } from "./ProjectCard";
import { useErrorHandler } from "@/hooks/useErrorHandler";

export const ProjectList = () => {
  const userId = useUserId();
  const { data, error } = useGetProjectQuery(userId, { skip: !userId });
  useErrorHandler(error);
  return (
    <div className="flex gap-5 overflow-x-auto">
      {data && data?.length > 0 ? (
        data?.map((item) => <ProjectCard key={item.id} data={item} />)
      ) : (
        <p>You need to create an project or be invited to project</p>
      )}
    </div>
  );
};
