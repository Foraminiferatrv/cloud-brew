import validateEmail from "@/app/api/utils/validate-email";
import { db } from "@/db/drizzle";
import { user } from "@/db/schema/users.schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import * as jose from "jose";

export async function POST(request: Request) {
  const body = await request.json();

  const { email, password } = body;

  // Validate email
  if (!validateEmail(email))
    return Response.json(
      {
        error: "Invalid email",
        message: "Please enter a valid email address",
      },
      { status: 400 },
    );

  // Check if user exists
  const [targetUser] = await db
    .selectDistinct()
    .from(user)
    .where(eq(user.email, email));

  if (!targetUser)
    return Response.json(
      { error: "User not found", message: "User not found" },
      { status: 400 },
    );

  const correctPassword = bcrypt.compareSync(password, targetUser.password);

  if (!correctPassword) {
    return Response.json(
      {
        error: "Incorrect email or password",
        message: "Incorrect email or password",
      },
      { status: 400 },
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({ alg })
    .setExpirationTime("72h")
    .setSubject(targetUser.id.toString())
    .sign(secret);

  console.log(jwt);

  return Response.json({ token: jwt });
}
