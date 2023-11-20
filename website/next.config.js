const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config, { defaultLoaders }) => {
    config.resolve.alias["@shared"] = path.join(__dirname, "../shared");

    // Add a rule to include and parse the shared folder
    config.module.rules.push({
      test: /\.(js|jsx)$/,
      include: [path.join(__dirname, "../shared")],
      use: defaultLoaders.babel,
    });

    return config;
  },
};

module.exports = nextConfig;
