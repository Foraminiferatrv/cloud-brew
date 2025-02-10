"use server";
import { API_ROUTES } from "@/constants/api-routes.constant";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes.constant";
import { cookies } from "next/headers";

export default async function loginAction(
  currentState: unknown,
  formData: FormData,
): Promise<string> {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log("Creds from action", { email, password });

  // Call API to login
  const res: Response = await fetch(process.env.API_URL + API_ROUTES.LOGIN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  console.log("Response from action", res);

  const json = await res.json();

  // Set token in cookies
  const cookiesObj = await cookies();
  cookiesObj.set("Authorization", json.token, {
    secure: true,
    expires: new Date(Date.now() + 72 * 60 * 60 * 1000), // 72 hours
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  console.log("Json from action", json);

  // Redirect to home page
  if (res.ok) {
    redirect(ROUTES.HOME);
  } else {
    return json.error;
  }
}
