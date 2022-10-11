const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: 'source-map',
  entry: {
    app: './src/index',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js',
  },
  optimization: {noEmitOnErrors: true},
  plugins: [new MiniCssExtractPlugin({filename: 'styles.css'})],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{loader: 'babel-loader'}],
      },

      {
        test: /\.css\.js$/,
        use: [
          {loader: 'babel-loader'},

          {
            loader: require.resolve('@linaria/webpack5-loader'),
            options: {
              sourceMap: dev,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          // 'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: dev},
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    devMiddleware: {
      publicPath: '/dist/',
    },
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8080,
  },
}
