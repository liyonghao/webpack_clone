function Header() {
  let dom = document.getElementById('root')
  let header = document.createElement('div')
  header.innerText = 'header'
  dom.append(header)
}

// common.js 写法
module.exports = Header
