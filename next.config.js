/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = (phase) => {
  return {
    ...nextConfig,
    images: {
      domains: ['source.unsplash.com'],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3|mp4)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
      return config;
    },
  };
};
