import { NextResponse } from "next/server";

const BLOCKED_PATH_PREFIXES = [
  "/wp-admin",
  "/wp-login",
  "/.env",
  "/.git",
  "/phpmyadmin",
  "/administrator",
  "/xmlrpc.php",
];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const lower = pathname.toLowerCase();
  if (
    BLOCKED_PATH_PREFIXES.some((prefix) => lower.startsWith(prefix)) ||
    lower.includes("..")
  ) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
