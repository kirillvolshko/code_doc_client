"use client";
import React, { useState, ReactElement } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

interface DialogWindowProps {
  triggerComponent?: ReactElement<{ onClick?: () => void }>;
  content?: ReactElement<{ onClose?: () => void }>;
  fullView?: boolean;
  className?: string;
  hideCloseButton?: boolean;
}

export const DialogWindow = ({
  content,
  fullView,

  triggerComponent,
  className,
}: DialogWindowProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerComponent &&
          React.cloneElement(triggerComponent, {
            onClick: () => setOpen((prev) => !prev),
          })}
      </DialogTrigger>

      <DialogTitle className="invisible"></DialogTitle>
      <DialogDescription className="invisible"></DialogDescription>
      <DialogClose asChild />

      <DialogContent
        className={cn(
          "bg-black/10 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg p-[20px] md:p-[30px] overflow-y-auto max-h-[80vh]",
          fullView && "p-0 border-none",
          className
        )}
      >
        {content &&
          React.cloneElement(content, {
            onClose: () => setOpen(false),
          })}
      </DialogContent>
    </Dialog>
  );
};
