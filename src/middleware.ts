import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

function middleware(req: NextRequest): NextResponse {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;
  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1] ?? '';
    const [user, pwd] = atob(authValue).split(':');

    if (
      user === process.env.NEXT_PUBLIC_BASIC_AUTH_USER &&
      pwd === process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD
    ) {
      return NextResponse.next();
    }
  }
  url.pathname = '/api/basic-auth';

  return NextResponse.rewrite(url);
}

export { middleware };
