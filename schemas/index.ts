import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email({ message: "Email inválido!" }),
  password: z.string().min(3, { message: "Senha inválida!" }),
});
