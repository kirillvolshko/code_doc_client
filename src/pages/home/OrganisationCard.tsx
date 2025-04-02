import { IOrganisationResponse } from "@/types/organisation";
import Link from "next/link";

type OrganisationCardProps = {
  data: IOrganisationResponse;
};

export const OrganisationCard = ({ data }: OrganisationCardProps) => {
  return (
    <Link href={`/organisation/${data.id}`}>
      <div className="border border-black rounded-md p-[30px] text-center hover:cursor-pointer">
        <p className="text-xl font-semibold">{data.name}</p>
      </div>
    </Link>
  );
};
