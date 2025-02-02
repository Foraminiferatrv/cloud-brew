import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { API_ROUTES } from "@/constants/api-routes.constant";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes.constant";
import { Label } from "@/components/ui/label";

export default function Signup() {
  async function handleSubmit(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");
    const username = formData.get("username");

    console.log({ email, password, username });

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

    const json = await res.json();

    console.log(json);

    if (res.ok) {
      redirect(ROUTES.LOGIN);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Signup</h1>
      <div className="flex w-full max-w-[400px] flex-col gap-4">
        <form action={handleSubmit}>
          <Label htmlFor="username">Name</Label>
          <Input aria-label="Name" name="username" type="text" />

          <Label htmlFor="Email">email</Label>
          <Input aria-label="Email" name="email" type="email" />

          <Label htmlFor="Password">Password</Label>
          <Input aria-label="Password" name="password" type="password" />

          <Button className="w-100" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
