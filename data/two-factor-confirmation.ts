import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (id: string) => {
  try {
    const twoFactorConfirmation = db.twoFactorConfirmation.findUnique({
      where: { userId: id },
    });

    return twoFactorConfirmation;
  } catch (error) {
    return null;
  }
};
