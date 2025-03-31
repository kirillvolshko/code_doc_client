import { ReactNode } from "react";

type ActionButtonProps = {
  icon: ReactNode;
  title: string;
};

export const ActionButton = ({ icon, title }: ActionButtonProps) => {
  return (
    <span className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 rounded-md cursor-pointer">
      <div>{icon && icon}</div>
      {title && title}
    </span>
  );
};
