"use client";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { API_ROUTES } from "@/constants/api-routes.constant";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes.constant";
import { Label } from "@/components/ui/label";
import signupAction from "./signupAction";
import { useActionState } from "react";
import Link from "next/link";

export default function Signup() {
  const [error, formAction] = useActionState(signupAction, undefined);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1>Signup</h1>
      <div className="flex w-full max-w-[400px] flex-col gap-4">
        <form action={formAction}>
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
        {error && <p className="text-red-500">{error}</p>}

        <Link className="font-bold" href={ROUTES.LOGIN}>
          Login
        </Link>
      </div>
    </div>
  );
}
