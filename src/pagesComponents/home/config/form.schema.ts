import { z } from "zod";

const CreateProjectSchema = z.object({
  name: z.string(),
});
export default CreateProjectSchema;
