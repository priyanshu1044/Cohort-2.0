import { z } from "zod";

export const signupInput = z.object({
    username: z.string().min(1, { message: "Username cannot be empty" }),
    password: z.string().min(1, { message: "Password cannot be empty" }),
  });
export type signUpType = z.infer<typeof signupInput>;