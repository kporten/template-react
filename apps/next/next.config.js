// https://nextjs.org/docs/app/api-reference/next-config-js

module.exports = () => {
  /** @type {import('next').NextConfig} */
  const config = {
    eslint: {
      ignoreDuringBuilds: true,
    },
  };

  return config;
};
