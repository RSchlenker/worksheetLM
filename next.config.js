const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'worksheetlm.netlify.app',
        'ab.schlenker.io',
      ],
    },
  },
}

module.exports = nextConfig
