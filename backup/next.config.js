const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)

module.exports = {
  distDir: '../dist',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (!dev) {
      await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'))
      await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'))
    }
    
    return {
      '/': { page: '/' },
      '/projects': { page: '/projects' },
      '/blog': { page: '/blog' }
    }
  }
}