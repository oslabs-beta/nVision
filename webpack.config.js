const path = require("path");

module.exports = {
  mode: 'production',
  entry: './app/Index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
              '@babel/preset-env', {
                modules: false,
                loose: true
                }
              ],
              '@babel/preset-react'
            ],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
        // resolve: {
        //   extensions: ['.tsx', '.ts', '.js']
        // }
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'app/styles'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom',
    'd3': 'd3',
  }
};
