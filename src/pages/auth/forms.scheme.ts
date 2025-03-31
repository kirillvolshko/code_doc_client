import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export const RegistratinSchema = z.object({
  email: z.string(),
  password: z.string(),
  name: z.string(),
});
