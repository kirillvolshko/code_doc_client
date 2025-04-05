import { z } from "zod";

export const DocumentSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export const CommentSchema = z.object({
  content: z.string(),
});
