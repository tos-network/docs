const nextra = require('nextra').default

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = ''

if (isGithubActions) {
  // Get repository name from GITHUB_REPOSITORY environment variable
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'docs'
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

module.exports = withNextra({
  output: "export",
  basePath: basePath,
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
})