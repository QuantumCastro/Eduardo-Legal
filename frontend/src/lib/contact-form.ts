import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email(),
  details: z.string().trim().min(10).max(1000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
