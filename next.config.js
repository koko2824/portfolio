require('dotenv').config()

module.exports = {
  assetPrefix: process.env.GITHUB_PAGES ? '/portfolio' : '',
  experimental: {
    optimizeFonts: true,
  },
}
