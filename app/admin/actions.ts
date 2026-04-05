"use server";

import { redirect } from "next/navigation";
import {
  clearAdminSession,
  createAdminSession,
  verifyAdminPassword,
} from "@/lib/admin-auth";

type LoginState = {
  error: string;
};

export async function loginAction(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const passwordValue = formData.get("password");
  const password = typeof passwordValue === "string" ? passwordValue : "";

  if (!verifyAdminPassword(password)) {
    return { error: "パスワードが違います" };
  }

  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin");
}
