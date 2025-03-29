import Link from "next/link";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="flex justify-between p-[30px] bg-black/20">
      <Link href="/home">
        <p className="text-[25px] font-semibold">
          <span className="text-white">Code</span>Doc
        </p>
      </Link>
      <Button>Log out</Button>
    </header>
  );
};
