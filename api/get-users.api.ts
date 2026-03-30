import { UserSchema, type User } from "@/schemas/user.schema";

export const getUsers = async (signal?: AbortSignal): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  const data = await response.json();
  return UserSchema.array().parse(data);
};
