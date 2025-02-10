"use server";
import { API_ROUTES } from "@/constants/api-routes.constant";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes.constant";

export default async function signupAction(
  currentState: unknown,
  formData: FormData,
): Promise<string> {
  const email = formData.get("email");
  const password = formData.get("password");
  const username = formData.get("username");

  const res: Response = await fetch(process.env.API_URL + API_ROUTES.SIGNUP, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
      username,
    }),
  });

  console.log("Response from action", res);

  const json = await res.json();

  console.log("Json from action", json);

  if (res.ok) {
    redirect(ROUTES.LOGIN);
  } else {
    return json.error;
  }
}
