import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (session) {
    if (
      req.nextUrl.pathname === "/auth/login" ||
      req.nextUrl.pathname === "/auth/register"
    ) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    // console.log(req.nextUrl.pathname);
    if (req.nextUrl.pathname === "" || req.nextUrl.pathname === "/") {
      //   console.log("estas ingresando al home,,,,");
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/register", "/"],
};
