"use client";
import { format } from "date-fns";
export const parsedDate = (date: string) => {
  return format(date, "MM/dd/yyyy");
};
