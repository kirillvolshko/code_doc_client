import { Suspense } from "react";
import ClientSettingsPage from "@/pagesComponents/settings/ClientSettingsPage";
import { Spinner } from "@/components/common/ui/Spinner";

const SettingsPage = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ClientSettingsPage />
    </Suspense>
  );
};

export default SettingsPage;
