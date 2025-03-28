import { z } from "zod";

export const LoginShema = z.object({
  email: z.string(),
  password: z.string(),
});
export const RegistratinShema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
});
