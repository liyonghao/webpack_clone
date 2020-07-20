function Sidebar() {
  let dom = document.getElementById('root')
  let sidebar = document.createElement('div')
  sidebar.innerText = 'sidebar'
  dom.append(sidebar)
}

// common.js 写法
module.exports = Sidebar
