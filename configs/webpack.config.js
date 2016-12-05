const path = require('path')
module.exports = {
  context: path.join(__dirname, '../src'),
  entry: {
    'array': './array/index.js',
    'false': './false/index.js',
    'isNullOrUndefined': './isNullOrUndefined/index.js',
    'null': './null/index.js',
    'number': './number/index.js',
    'object': './object/index.js',
    'string': './string/index.js',
    'true': './true/index.js',
    'undefined': './undefined/index.js'
  },
  output: {
    filename: '[name].js',
    library: ['is', '[name]'],
    libraryTarget: 'umd',
    path: path.join(__dirname, '../dist')
  }
}
