import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Board directive 2026-04-28: Site offline until explicit board approval.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/studio") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/maintenance" ||
    pathname.startsWith("/maintenance/")
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/maintenance", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
