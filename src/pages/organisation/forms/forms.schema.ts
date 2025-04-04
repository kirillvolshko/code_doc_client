import { z } from "zod";

export const DocumentSchema = z.object({
  title: z.string(),
  content: z.string(),
});
