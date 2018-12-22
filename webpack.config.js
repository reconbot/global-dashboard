const path = require('path')

module.exports = {
  entry: './lib/index.js',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  externals: {
    'pty.js': 'pty.js',
    'term.js': 'term.js',
  },
}
