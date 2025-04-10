import { ActionButton } from "@/components/common/ui/ActionButton";
import { DialogWindow } from "@/components/common/ui/DialogWindow";
import CreateProjectForm from "@/pagesComponents/home/CreateProjectForm";
import ProjectList from "@/pagesComponents/home/ProjectList";

import { Plus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-10 p-[30px] w-full h-[calc(100vh-130px)]">
      <div className="flex items-center justify-between w-full">
        <p className="text-white text-xl font-semibold">
          Welcome back to the system
        </p>
        <div>
          <DialogWindow
            triggerComponent={
              <ActionButton icon={<Plus />} title="Create project" />
            }
            content={<CreateProjectForm />}
          />
        </div>
      </div>

      <ProjectList />
    </div>
  );
};

export default HomePage;
