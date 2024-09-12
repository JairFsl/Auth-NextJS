import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email inválido!" }),
  password: z.string().min(3, { message: "Senha inválida!" }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, { message: "Nome é obrigatório!" }),
  email: z.string().email({ message: "Email inválido!" }),
  password: z
    .string()
    .min(6, { message: "Senha deve ter no mínimo 6 caracteres!" }),
});
