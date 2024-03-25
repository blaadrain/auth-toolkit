"use server";

import { getPasswordResetTokenByToken } from "@/data/password-reset-token";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { NewPasswordSchema, NewPasswordSchemaType } from "@/schemas";
import bcrypt from "bcryptjs";

export const newPassword = async (
  values: NewPasswordSchemaType,
  token?: string | null,
) => {
  if (!token) {
    return { error: "Missing token" };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const existingToken = await getPasswordResetTokenByToken(token);

  if (!existingToken) {
    return { error: "Invalid token" };
  }

  if (new Date(existingToken.expires) < new Date()) {
    return { error: "Token has expired" };
  }

  const user = await getUserByEmail(existingToken.email);

  if (!user) {
    return { error: "Email does not exist" };
  }

  const { password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: {
      id: user.id,
    },
    data: {
      password: hashedPassword,
    },
  });

  await db.passwordResetToken.delete({
    where: {
      id: existingToken.id,
    },
  });

  return { success: "Password updated" };
};
