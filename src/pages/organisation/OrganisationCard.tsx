import { IOrganisationResponse } from "@/types/organisation";

type OrganisationCardProps = {
  data: IOrganisationResponse;
};

export const OrganisationCard = ({ data }: OrganisationCardProps) => {
  return (
    <div className="border border-black rounded-md p-[30px] text-center">
      <p className="text-xl font-semibold">{data.name}</p>
    </div>
  );
};
