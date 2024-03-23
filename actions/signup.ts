"use server";

import { SignUpSchema, SignUpSchemaType } from "@/schemas";

export const signup = async (values: SignUpSchemaType) => {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
