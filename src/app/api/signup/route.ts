import validateEmail from "@/app/api/utils/validate-email";
import bcrypt from "bcryptjs";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/users.schema";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password, username } = body;

  if (!validateEmail(email))
    return Response.json(
      {
        error: "Invalid email",
        message: "Please enter a valid email address",
      },
      { status: 400 },
    );

  const hash = bcrypt.hashSync(password, 8);

  await db.insert(user).values({
    email,
    password: hash,
    username,
  });

  console.log(body);
  return Response.json({});
}
