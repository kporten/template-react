// https://nextjs.org/docs/app/api-reference/next-config-js

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  /** @type {import('next').NextConfig} */
  const config = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    headers: () => {
      const headers = [];

      if (phase !== PHASE_DEVELOPMENT_SERVER) {
        headers.push({
          source: '/:path*',
          headers: securityHeaders,
        });
      }

      return headers;
    },
  };

  return config;
};

// https://nextjs.org/docs/advanced-features/security-headers

const contentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data:;
  frame-ancestors 'none';
  object-src 'none';
`;

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
  {
    key: 'Content-Security-Policy',
    value: contentSecurityPolicy.replaceAll(/\s{2,}/g, ' ').trim(),
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
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
];
