import { ActionFunction, json } from "remix";
import { assertType, throwByStatus } from "~/utils/validations.server";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const usernameFormData = data.get("username");
  const passwordFormData = data.get("password");

  const usernameResult = assertType<string>(usernameFormData, "string");
  const passwordResult = assertType<string>(passwordFormData, "string");
  if (usernameResult.res === "err") {
    throwByStatus(400, "Username must be of type string");
  }
  if (passwordResult.res === "err") {
    throwByStatus(400, "Password must be of type string");
  }

  const username = usernameResult.payload;
  const password = passwordResult.payload;
  if (!username?.trim()) {
    throwByStatus(400, "Username is required");
  }
  if (!password?.trim()) {
    throwByStatus(400, "Password is required");
  }

  // todo add supabase calls here

  return json("Login successful", 200);
};
