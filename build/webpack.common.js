const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {merge} = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const commonConfig = {
  // 简写
  // entry: './src/index.js', // 从哪开始打包.打包文件入口
  entry:{
    main: './src/index.js', // 从哪开始打包.打包文件入口
  },
  // 当用到类库的时候，自动打包文件
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // -10 代表优先级
          filename: 'vendor.js'
        }
      }
      // minSize: 30000,
      // minChunks: 1, // 当一个模块用了多少次的时候才开始分割
      // maxAsyncRequests: 5,
      // maxInitialRequests: 3,
      // automaticNameDelimiter: '~',
      // name: true,
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     priority: -10, // -10 代表优先级
      //     filename: 'vendor.js'
      //   },
      //   default: {
      //     minChunks: 2,
      //     priority: -20,
      //     reuseExistingChunk: true,
      //     filename: 'common.js'
      //   }
      // }
    }
  },
  output: {
    publicPath: '/', // 根路径，所有的打包文件引用加一个根路径
    filename: '[name].js', // 定义的打包后的js文件名 name就是打包的key值
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, '../dist') // 打包dist的目录下
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // 排出在外，如果你的代码在node——modules就不用babel语法了
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader'
          },
          // {
          //   loader: 'imports-loader?this=>window'
          // }
        ]
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
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use:{
          loader: 'file-loader'
        }
      },
    ]
  },
  performance: false,
  plugins: [
    // 打包之后运行
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    // 打包之前运行
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin()
    // new BundleAnalyzerPlugin()
    // 如果查到某个模块用到$符号，自动引入jquery库
    new webpack.ProvidePlugin({
      $: 'jquery',
      _join: ['lodash', 'join']
    })
  ]
}
module.exports = (env) => {
  if (env && env.production) {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}