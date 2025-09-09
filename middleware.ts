// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
  
//   // Public routes that don't require authentication
//   const publicRoutes = ['/auth/signin', '/auth/signup'];
  
//   // Check for session token in cookies
//   const token = request.cookies.get('next-auth.session-token') || request.cookies.get('__Secure-next-auth.session-token');
  
//   // If no token and trying to access protected route
//   if (!token && !publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/auth/signin', request.url));
//   }
  
//   // If has token and trying to access auth pages, redirect to dashboard
//   if (token && publicRoutes.includes(pathname)) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }
  
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };


import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public routes (no auth required)
  const publicRoutes = ["/auth/signin", "/auth/signup"];

  // Get token using NextAuth's JWT helper
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  // If no token and accessing protected route → redirect to signin
  if (!token && !publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  // If logged in and visiting signin/signup → redirect to dashboard
  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
