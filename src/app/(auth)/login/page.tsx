"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";
import loginAction from "@/app/(auth)/login/loginAction";
import Link from "next/link";
import { ROUTES } from "@/constants/routes.constant";

export default function Login() {
  const [error, formAction] = useActionState(loginAction, undefined);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Login</h1>
      <div className="flex w-full max-w-[400px] flex-col gap-4">
        <form action={formAction}>
          <Label htmlFor="Email">Email</Label>
          <Input aria-label="Email" name="email" type="email" />

          <Label htmlFor="Password">Password</Label>
          <Input aria-label="Password" name="password" type="password" />

          <Button className="w-100" type="submit">
            Submit
          </Button>
        </form>
        {error && <p className="text-red-500">{error}</p>}
        <Link className="font-bold" href={ROUTES.SIGNUP}>
          SignUp
        </Link>
      </div>
    </div>
  );
}
