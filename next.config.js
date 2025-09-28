const nextra = require('nextra').default

const withNextra = nextra({

})

module.exports = withNextra({
  output: "export",
  basePath: "/docs",
  assetPrefix: "/docs/",
  images: {
    unoptimized: true
  }
})