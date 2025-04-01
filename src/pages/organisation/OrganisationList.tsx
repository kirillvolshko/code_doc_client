"use client";
import { useUserId } from "@/hooks/useUserId";
import { useGetOrganisationQuery } from "@/store/organisation/organisationService";
import { OrganisationCard } from "./OrganisationCard";

export const OrganisationList = () => {
  const userId = useUserId();
  const { data } = useGetOrganisationQuery(userId, { skip: !userId });

  return (
    <div className="flex gap-5 overflow-x-auto">
      {data?.map((item) => (
        <OrganisationCard key={item.id} data={item} />
      ))}
    </div>
  );
};
