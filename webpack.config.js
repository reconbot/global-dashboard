const path = require('path')
const {BannerPlugin} = require('webpack')

module.exports = {
  entry: './lib/index.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new BannerPlugin({banner: '#!/usr/bin/env node', raw: true})
  ],
  externals: {
    'pty.js': 'pty.js',
    'term.js': 'term.js',
  },
}
