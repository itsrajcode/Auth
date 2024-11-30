"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
export const register = async (data: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.parse(data);

  if (!validatedFields) {
    return {
      success: false,
      message: "Invalid form data",
    };
  }

  const { email, password, name } = validatedFields;
  const hashedPassword = await bcrypt.hash(password, 10);

 const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      message: "User already exists",
    };
  }
  await db.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return {
    success: true,
    message: "User created successfully",
  };
};
