import { COOKIES_ACCESS_TOKEN } from '../lib/constants';
import { NextRequest, NextResponse } from 'next/server';

export function authMiddleware(request: NextRequest) {
  // Setting cookies on the response
  const response = NextResponse.next();

  const isHaveAccessToken = request.cookies.get(COOKIES_ACCESS_TOKEN);
  if (!isHaveAccessToken && !request.nextUrl.pathname.includes('/auth')) {
    const redirectToLoginUrl = new URL('/auth/login', request.nextUrl);
    return NextResponse.redirect(redirectToLoginUrl);
  }

  return response;
}
