/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_URL: "https://wpe-hiring.tokopedia.net/graphql"
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
}

module.exports = nextConfig
