import { z } from "zod";

export const CreateDocumentSchema = z.object({
  title: z.string(),
  content: z.string(),
});
