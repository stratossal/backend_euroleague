import { z } from "zod";

export const createUserSchema = z.object({
  firstname: z.string().min(2),
  lastname: z.string().min(2),
  email: z.email({ pattern:/^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i}),
  country: z.string().min(2),
  address: z.object({
    area: z.string().optional(),
    street: z.string().optional(),
    number: z.string().optional(),
    po: z.string().optional(),
    municipality: z.string().optional()
  }),
  phone: z.string().min(5),
  favTeam: z.string().min(2),
  password: z.string().min(5)
});

export const updateUserSchema = createUserSchema.partial()
