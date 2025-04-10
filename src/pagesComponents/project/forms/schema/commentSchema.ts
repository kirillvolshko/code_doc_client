import { z } from "zod";

const CommentSchema = z.object({
  content: z.string(),
});
export default CommentSchema;
