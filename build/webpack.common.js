const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  // 简写
  // entry: './src/index.js', // 从哪开始打包.打包文件入口
  entry:{
    main: './src/index.js', // 从哪开始打包.打包文件入口
  },
  output: {
    publicPath: '/', // 根路径，所有的打包文件引用加一个根路径
    filename: '[name].js', // 定义的打包后的js文件名 name就是打包的key值
    path: path.resolve(__dirname, '../dist') // 打包dist的目录下
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 排出在外，如果你的代码在node——modules就不用babel语法了
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // 就是一个用来检测的正则表达式，如果符合规则，就用 use 里面的东西来处理它。
        use: [
          {
            loader: 'url-loader', // 和file-loader不一样的是会把图片转换成base64 的文件，打包到js文件里，大文件不考虑使用，
            options: {
              name: '[name]_[hash].[ext]', // 打
              outputPath: 'images/', // 指定打包的位置
              limit: 2048 // 如果图片大小超过2048字节，那么打包到dist文件下，生成images文件，如果小于，就生成base64码放到js文件中
            }
          }
        ],
      },
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
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use:{
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    // 打包之后运行
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 打包之前运行
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin()
  ],
}