import Link from "next/link";
import { LogoutButton } from "../common/ui/LogoutButton";

export const Header = () => {
  return (
    <header className="flex justify-between p-[30px] bg-white/20">
      <Link href="/home">
        <div className="">
          <span className="text-white text-[25px] font-bold">Code</span>
          <span className="text-primary text-[25px] font-bold">Doc</span>
        </div>
      </Link>
      <LogoutButton />
    </header>
  );
};
