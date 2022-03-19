import { User, ApiError } from "@supabase/supabase-js";
import { match, __ } from "ts-pattern";
import { supabase } from "../db/supabase.server";

export const registerNewUser = async (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  nickname: string
): Promise<Result<Nullable<User>, Nullable<ApiError>>> => {
  const { user, session, error } = await supabase.auth.signUp(
    {
      email,
      password,
    },
    {
      data: {
        first_name: firstName,
        last_name: lastName,
        nickname,
      },
    }
  );

  return match(error)
    .with(__.nullish, () => ({ res: "ok", payload: user } as const))
    .otherwise(() => ({ res: "err", payload: error } as const));
};
