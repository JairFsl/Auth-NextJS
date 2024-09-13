import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.user.findUnique({
        where: { email },
      });
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const getUserById = async (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await db.user.findUnique({
        where: { id },
      });
      resolve(result);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};
