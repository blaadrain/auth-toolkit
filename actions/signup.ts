"use server";

import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { SignUpSchema, SignUpSchemaType } from "@/schemas";
import bcrypt from "bcryptjs";

export const signup = async (values: SignUpSchemaType) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password } = validatedFields.data;

  const user = await getUserByEmail(email);

  if (user) return { error: "Email already exists" };

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send verification token email

  return { success: "Account created!" };
};
