const {merge} = require('webpack-merge')
const commonConfig = require('./webpack.common')
const prodConfig = {
  mode: 'production', // 默认production 打包出的文件默认压缩  development 不会被压缩
  devtool: 'cheap-module-source-map'
}
module.exports = merge(commonConfig, prodConfig)
