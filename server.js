const express = require('express');
// 1.引入webpa库
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware')
// 2.引入开发库的非系统文件
const config = require('./webpack.config')
// 3.complier 意思：用webpack结合配置文件，随时进行代码编译。帮我们做编译，让编辑器编译一次，就从新打包一次代码
const complier = webpack(config);

const app = express();
// 编译文件发生改变了，complier就会重新运行
// 重新运行的文件对应的打包输出内容的publicPath
// 就是config.output.publicPath

// 在node中直接使用webpack
// 在命令行中直接使用webpack
app.use(webpackDevMiddleware(complier, {
  publicPath: config.output.publicPath
}))

app.listen(3000, () => {
  console.log('server is running')
})
// 自己配置，需要写很多配置项，浪费精力
