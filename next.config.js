const nextra = require('nextra').default

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
  output: "export",
  basePath: "/docs",
  assetPrefix: "/docs/",
  images: {
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
})