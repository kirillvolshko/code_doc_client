"use client";
import { useUserId } from "@/hooks/useUserId";
import { useGetOrganisationQuery } from "@/store/organisation/organisationService";
import { OrganisationCard } from "./OrganisationCard";
import { useErrorHandler } from "@/hooks/useErrorHandler";

export const OrganisationList = () => {
  const userId = useUserId();
  const { data, error } = useGetOrganisationQuery(userId, { skip: !userId });
  useErrorHandler(error);
  return (
    <div className="flex gap-5 overflow-x-auto">
      {data && data?.length > 0 ? (
        data?.map((item) => <OrganisationCard key={item.id} data={item} />)
      ) : (
        <p>You need to create an organisation or be invited to organisation</p>
      )}
    </div>
  );
};
