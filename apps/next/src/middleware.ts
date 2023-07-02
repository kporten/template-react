import { match as matchLocale } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

import { availableLocales, defaultLocale } from '@/utils/locales';

export const config = {
  matcher: '/((?!_next).*)',
};

// https://nextjs.org/docs/app/building-your-application/routing/internationalization
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const hasLocaleInPathname = availableLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (!hasLocaleInPathname) {
    const negotiator = new Negotiator({
      headers: Object.fromEntries(req.headers.entries()),
    });

    const locale = matchLocale(
      negotiator.languages(),
      availableLocales as unknown as string[],
      defaultLocale,
      { algorithm: 'best fit' },
    );

    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, req.url),
    );
  }
}
