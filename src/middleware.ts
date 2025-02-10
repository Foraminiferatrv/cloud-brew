import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import * as jose from "jose";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const cookiesObj = await cookies();
  console.log("MIDDLEWRE");
  const cookie = cookiesObj.get("Authorization");
  console.log("Cookie from middleware", cookie);

  if (!cookie) return NextResponse.redirect(new URL("/login", request.url));

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const jwt = cookie.value;

  try {
    const { payload } = await jose.jwtVerify(jwt, secret);

    console.log("Payload from middleware", payload);
  } catch (_error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  // matcher: "/*",
  matcher:
    "/((?!api/login|api/signup|public|_next/static|_next/image|static|favicon.ico|login|signup).*)",
};
