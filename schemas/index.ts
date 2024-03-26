import { UserRole } from "@prisma/client";
import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  code: z.optional(z.string()),
});

export const SignUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "At least 6 characters are required" }),
});

export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
});

export const NewPasswordSchema = z.object({
  password: z
    .string()
    .min(6, { message: "At least 6 characters are required" }),
});

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    isTwoFactorEnabled: z.optional(z.boolean()),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required",
      path: ["newPassword"],
    },
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required",
      path: ["password"],
    },
  );
export type LoginSchemaType = z.infer<typeof LoginSchema>;
export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
export type ResetSchemaType = z.infer<typeof ResetSchema>;
export type NewPasswordSchemaType = z.infer<typeof NewPasswordSchema>;
export type SettingsSchemaType = z.infer<typeof SettingsSchema>;
