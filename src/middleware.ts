import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Redirect all paths except "/" to "/"
  if (path !== '/' && !path.startsWith('/_next') && !path.startsWith('/api')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Continue with the request if it's for the home page
  return NextResponse.next();
}

// Match all paths except for the home page and API routes
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
