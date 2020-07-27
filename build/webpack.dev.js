const webpack = require('webpack')
// const {merge} = require('webpack-merge')
// const commonConfig = require('./webpack.common')
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
  output: {
    publicPath: '/', // 根路径，所有的打包文件引用加一个根路径
    filename: '[name].js', // 定义的打包后的js文件名 name就是打包的key值
    chunkFilename: '[name].js',
  },
  module:{
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
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
          'style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
  ]
}
// module.exports = merge(commonConfig, devConfig);
module.exports = devConfig;
