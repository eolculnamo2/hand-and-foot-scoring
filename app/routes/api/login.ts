import { ActionFunction, json, redirect } from "remix";
import { supabase } from "~/server/db/supabase.server";
import { supabaseToken } from "~/server/utils/auth.server";
import { assertType, throwByStatus } from "~/utils/validations.server";

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const emailFormData = data.get("email");
  const passwordFormData = data.get("password");

  const emailResult = assertType<string>(emailFormData, "string");
  const passwordResult = assertType<string>(passwordFormData, "string");
  if (emailResult.res === "err") {
    throwByStatus(400, "Email must be of type string");
  }
  if (passwordResult.res === "err") {
    throwByStatus(400, "Password must be of type string");
  }

  const email = emailResult.payload;
  const password = passwordResult.payload;
  if (!email?.trim()) {
    throwByStatus(400, "Email is required");
  }
  if (!password?.trim()) {
    throwByStatus(400, "Password is required");
  }

  const { session, error } = await supabase.auth.signIn({ email, password });
  if (session) {
    return redirect("/dashboard", {
      headers: {
        "Set-Cookie": await supabaseToken.serialize(session.access_token, {
          expires: new Date(session?.expires_at!),
          maxAge: session.expires_in,
        }),
      },
    });
  }

  if (error && error.status >= 500) {
    console.error(`Unexpected login error; ${error.status} ${error.message}`);
  }

  return { error };
};
