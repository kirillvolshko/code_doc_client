import { ActionButton } from "@/components/common/ui/ActionButton";
import { DialogWindow } from "@/components/common/ui/DialogWindow";
import { CreateOrganisationForm } from "@/pages/organisation/CreateOrganisationForm";
import { OrganisationList } from "@/pages/organisation/OrganisationList";

import { Plus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 p-[30px] w-full ">
      <div className="flex items-center justify-between w-full">
        <p className="text-xl font-semibold">Welcome back to the system</p>
        <div>
          <DialogWindow
            triggerComponent={
              <ActionButton icon={<Plus />} title="Create organisation" />
            }
            content={<CreateOrganisationForm />}
          />
        </div>
      </div>
      <div>
        <OrganisationList />
      </div>
    </div>
  );
};

export default HomePage;
