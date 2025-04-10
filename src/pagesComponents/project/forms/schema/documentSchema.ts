import { z } from "zod";

const DocumentSchema = z.object({
  title: z.string(),
  content: z.string(),
});
export default DocumentSchema;
