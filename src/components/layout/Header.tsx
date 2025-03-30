import Link from "next/link";
import { LogoutButton } from "../common/ui/LogoutButton";

export const Header = () => {
  return (
    <header className="flex justify-between p-[30px] bg-black/20">
      <Link href="/home">
        <p className="text-[25px] font-semibold">
          <span className="text-white">Code</span>Doc
        </p>
      </Link>
      <LogoutButton />
    </header>
  );
};
