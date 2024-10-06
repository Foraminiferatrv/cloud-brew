/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: [
            {
              loader: "@svgr/webpack",
              options: { typescript: true, dimensions: false },
            },
          ],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
