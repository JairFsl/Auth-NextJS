"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/services/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Campos Inválidos!" };
  }

  const { name, email, password } = validateFields.data;

  const [hashPassword, existingUser] = await Promise.all([
    await bcrypt.hash(password, 10),
    await getUserByEmail(email),
  ]);

  if (existingUser) {
    return { error: "Email já cadastrado!" };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashPassword,
    },
  });

  return { success: "Usuário criado!" };
};
