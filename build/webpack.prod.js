// const {merge} = require('webpack-merge')
// const commonConfig = require('./webpack.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const prodConfig = {
  mode: 'production', // 默认production 打包出的文件默认压缩  development 不会被压缩
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/', // 根路径，所有的打包文件引用加一个根路径
    filename: '[name].[contenthash].js', // 定义的打包后的js文件名 name就是打包的key值
    chunkFilename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 通过import引入的文件之前，也要去走postcss-loader，sass-loader
              importLoaders: 2,
            }
          },
          'sass-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  optimization: {
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[name].chunk.css'
  })]
}
// module.exports = merge(commonConfig, prodConfig)
module.exports = prodConfig
