import { z } from "zod";

export const CreateOrganisationSchema = z.object({
  name: z.string(),
});
