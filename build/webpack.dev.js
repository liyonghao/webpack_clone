const webpack = require('webpack')
const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const devConfig = {
  mode: 'development', // 默认production 打包出的文件默认压缩  development 不会被压缩
  devServer: {
    contentBase: './dist',
    open: true, // 自动打开浏览器
    port: 8080, // 配置端口号。默认8080
    // hot: true,
    // hotOnly: true
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}
module.exports = merge(commonConfig, devConfig);
