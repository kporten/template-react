// https://beta.nextjs.org/docs/api-reference/next.config.js

/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  headers: () => [
    {
      source: '/:path*',
      headers: securityHeaders,
    },
  ],
};

// https://nextjs.org/docs/advanced-features/security-headers

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  frame-ancestors 'none';
  object-src 'none';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replaceAll(/\s{2,}/g, ' ').trim(),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];
