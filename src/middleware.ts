import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the path of the request
  const path = request.nextUrl.pathname;

  // Redirect all paths except "/" to "/"
  if (path !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Continue with the request if it's for the home page
  return NextResponse.next();
}

// Match all paths except for the home page and Next.js internal routes
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
