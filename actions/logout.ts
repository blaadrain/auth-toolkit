"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  // ... some server stuff here before logout

  await signOut();
};
