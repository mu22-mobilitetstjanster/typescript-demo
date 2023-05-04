const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    port: 9090,
    static: {
      directory: path.join(__dirname, 'public')
    }
  }
};