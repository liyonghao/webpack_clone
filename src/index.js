// import "@babel/polyfill";
let Header = require('./header.js')
let Sidebar = require('./sidebar.js')
let Content = require('./content.js')
// let img01 = require('./img01.jpg')
import imgs from '../src/images/img01.jpg'
// import style from './index.scss'
import './index.scss'
import createImg from './createImg'
import './style.css'
import counter from './counter'
import number from './number'
import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {add} from './math'
import loader from 'sass-loader'
import _ from 'lodash'
import './test'
console.log(test.name)
add(1, 4)
createImg()
// let img = new Image()
// img.src = imgs
// img.classList.add(style.img) // 在img图片上加一个img的样式
let root = document.getElementById('root')
// root.append(img)
root.innerHTML= '<div class="iconfont iconbianji">字体样式2</div>'
// consle.log('代码报错')

// let btn = document.createElement('button')
// btn.innerHTML = '新增-+'
// document.body.appendChild(btn)
// btn.onclick = function() {
//   let div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }
// export default class App extends Component {
//   render() {
//     return <div>Hello world</div>
//   }
// }
// ReactDOM.render(<App/>, document.getElementById('root'))

new Header()
new Sidebar()
new Content()

counter()
number()

if(module.hot) {
  module.hot.accept('./number'), () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  }
}
console.log('lodash----------------')
const arr = [
  new Promise(() => {}),
  new Promise(() => {})
]
arr.map(item => {
  console.log(item)
})
let element = document.createElement('div')
element.innerHTML = _.join(['Dell', 'Lee'], '-')
document.body.appendChild(element)
// async function getComponent () {
//   const { default: _ } = await import(/*webpackChunkNmae="lodash"*/ 'lodash')
//   let element = document.createElement('div')
//   element.innerHTML = _.join(['Dell', 'Lee'], '-')
//   return element
// }
// getComponent().then(element => {
//   document.body.appendChild(element)
// })