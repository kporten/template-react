import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { availableLocales, defaultLocale } from '@/utils/locales';

// https://nextjs.org/docs/app/building-your-application/routing/middleware
export const config = {
  matcher: '/((?!_next|icon).*)',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // handle locale redirect
  // https://nextjs.org/docs/app/building-your-application/routing/internationalization
  const hasLocaleInPathname = availableLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!hasLocaleInPathname) {
    const negotiator = new Negotiator({
      headers: Object.fromEntries(request.headers.entries()),
    });

    const locale = matchLocale(
      negotiator.languages(),
      availableLocales as unknown as string[],
      defaultLocale,
      { algorithm: 'best fit' },
    );

    request.nextUrl.pathname = `/${locale}${pathname}`;

    return NextResponse.redirect(request.nextUrl);
  }

  // set response security headers
  if (process.env.NODE_ENV === 'production') {
    const headers = new Headers();

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
    const contentSecurityPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data:;
      frame-ancestors 'none';
      object-src 'none';
    `;

    headers.set(
      'Content-Security-Policy',
      contentSecurityPolicy.replaceAll(/\s{2,}/g, ' ').trim(),
    );

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
    headers.set(
      'Strict-Transport-Security',
      'max-age=63072000; includeSubDomains; preload',
    );

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
    headers.set('X-Content-Type-Options', 'nosniff');

    return NextResponse.next({ headers });
  }
}
