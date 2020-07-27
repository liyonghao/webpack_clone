/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// // import \"@babel/polyfill\";\n// let Header = require('./header.js')\n// let Sidebar = require('./sidebar.js')\n// let Content = require('./content.js')\n// // let img01 = require('./img01.jpg')\n// import imgs from '../src/images/img01.jpg'\n// // import style from './index.scss'\n// import './index.scss'\n// import createImg from './createImg'\n// import './style.css'\n// import counter from './counter'\n// import number from './number'\n// import React, {Component} from 'react';\n// import ReactDOM from 'react-dom'\n// import {add} from './math'\n// import loader from 'sass-loader'\n// import './test'\n// console.log(test.name)\n// add(1, 4)\n// createImg()\n// let img = new Image()\n// img.src = imgs\n// img.classList.add(style.img) // 在img图片上加一个img的样式\n// let root = document.getElementById('root')\n// root.append(img)\n// root.innerHTML= '<div class=\"iconfont iconbianji\">字体样式2</div>'\n// consle.log('代码报错')\n// let btn = document.createElement('button')\n// btn.innerHTML = '新增-+'\n// document.body.appendChild(btn)\n// btn.onclick = function() {\n//   let div = document.createElement('div')\n//   div.innerHTML = 'item'\n//   document.body.appendChild(div)\n// }\n// export default class App extends Component {\n//   render() {\n//     return <div>Hello world</div>\n//   }\n// }\n// ReactDOM.render(<App/>, document.getElementById('root'))\n// new Header()\n// new Sidebar()\n// new Content()\n// counter()\n// number()\n// if(module.hot) {\n//   module.hot.accept('./number'), () => {\n//     document.body.removeChild(document.getElementById('number'))\n//     number()\n//   }\n// }\n// console.log('lodash----------------')\n// const arr = [\n//   new Promise(() => {}),\n//   new Promise(() => {})\n// ]\n// arr.map(item => {\n//   console.log(item)\n// })\n// let element = document.createElement('div')\n// element.innerHTML = _.join(['Dell', 'Lee'], '-')\n// document.body.appendChild(element)\n// 异步加载--懒加载-详情页  主页 各个菜单页都可以分开来加载\n// async function getComponent () {\n//   const { default: _ } = await import(/*webpackChunkName:\"lodash\"*/ 'lodash')\n//   const element = document.createElement('div')\n//   element.innerHTML ='Goooo'\n//   return element\n// }\n// document.addEventListener('click', () => {\n//   import(/* webpackPrefetch: true */'./click.js').then(({default: _}) => {\n//     _()\n//   })\n//   // getComponent().then(element => {\n//   //   document.body.appendChild(element)\n//   // })\n// })\n// import './style.css'\n// import _ from 'lodash'\n// import $ from 'jquery'\n// import {ui} from './jquery.ui'\n// ui()\n// const dom = $('<div>');\n// dom.html(_.join(['gogogogo','lyh'], '-----'))\n// $('body').append(dom)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBpbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcclxuLy8gbGV0IEhlYWRlciA9IHJlcXVpcmUoJy4vaGVhZGVyLmpzJylcclxuLy8gbGV0IFNpZGViYXIgPSByZXF1aXJlKCcuL3NpZGViYXIuanMnKVxyXG4vLyBsZXQgQ29udGVudCA9IHJlcXVpcmUoJy4vY29udGVudC5qcycpXHJcbi8vIC8vIGxldCBpbWcwMSA9IHJlcXVpcmUoJy4vaW1nMDEuanBnJylcclxuLy8gaW1wb3J0IGltZ3MgZnJvbSAnLi4vc3JjL2ltYWdlcy9pbWcwMS5qcGcnXHJcbi8vIC8vIGltcG9ydCBzdHlsZSBmcm9tICcuL2luZGV4LnNjc3MnXHJcbi8vIGltcG9ydCAnLi9pbmRleC5zY3NzJ1xyXG4vLyBpbXBvcnQgY3JlYXRlSW1nIGZyb20gJy4vY3JlYXRlSW1nJ1xyXG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG4vLyBpbXBvcnQgY291bnRlciBmcm9tICcuL2NvdW50ZXInXHJcbi8vIGltcG9ydCBudW1iZXIgZnJvbSAnLi9udW1iZXInXHJcbi8vIGltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG4vLyBpbXBvcnQge2FkZH0gZnJvbSAnLi9tYXRoJ1xyXG4vLyBpbXBvcnQgbG9hZGVyIGZyb20gJ3Nhc3MtbG9hZGVyJ1xyXG4vLyBpbXBvcnQgJy4vdGVzdCdcclxuLy8gY29uc29sZS5sb2codGVzdC5uYW1lKVxyXG4vLyBhZGQoMSwgNClcclxuLy8gY3JlYXRlSW1nKClcclxuLy8gbGV0IGltZyA9IG5ldyBJbWFnZSgpXHJcbi8vIGltZy5zcmMgPSBpbWdzXHJcbi8vIGltZy5jbGFzc0xpc3QuYWRkKHN0eWxlLmltZykgLy8g5ZyoaW1n5Zu+54mH5LiK5Yqg5LiA5LiqaW1n55qE5qC35byPXHJcbi8vIGxldCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxyXG4vLyByb290LmFwcGVuZChpbWcpXHJcbi8vIHJvb3QuaW5uZXJIVE1MPSAnPGRpdiBjbGFzcz1cImljb25mb250IGljb25iaWFuamlcIj7lrZfkvZPmoLflvI8yPC9kaXY+J1xyXG4vLyBjb25zbGUubG9nKCfku6PnoIHmiqXplJknKVxyXG5cclxuLy8gbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbi8vIGJ0bi5pbm5lckhUTUwgPSAn5paw5aKeLSsnXHJcbi8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYnRuKVxyXG4vLyBidG4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgIGRpdi5pbm5lckhUTUwgPSAnaXRlbSdcclxuLy8gICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcclxuLy8gfVxyXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIHJlbmRlcigpIHtcclxuLy8gICAgIHJldHVybiA8ZGl2PkhlbGxvIHdvcmxkPC9kaXY+XHJcbi8vICAgfVxyXG4vLyB9XHJcbi8vIFJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpXHJcblxyXG4vLyBuZXcgSGVhZGVyKClcclxuLy8gbmV3IFNpZGViYXIoKVxyXG4vLyBuZXcgQ29udGVudCgpXHJcblxyXG4vLyBjb3VudGVyKClcclxuLy8gbnVtYmVyKClcclxuXHJcbi8vIGlmKG1vZHVsZS5ob3QpIHtcclxuLy8gICBtb2R1bGUuaG90LmFjY2VwdCgnLi9udW1iZXInKSwgKCkgPT4ge1xyXG4vLyAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtYmVyJykpXHJcbi8vICAgICBudW1iZXIoKVxyXG4vLyAgIH1cclxuLy8gfVxyXG4vLyBjb25zb2xlLmxvZygnbG9kYXNoLS0tLS0tLS0tLS0tLS0tLScpXHJcbi8vIGNvbnN0IGFyciA9IFtcclxuLy8gICBuZXcgUHJvbWlzZSgoKSA9PiB7fSksXHJcbi8vICAgbmV3IFByb21pc2UoKCkgPT4ge30pXHJcbi8vIF1cclxuLy8gYXJyLm1hcChpdGVtID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhpdGVtKVxyXG4vLyB9KVxyXG4vLyBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnRGVsbCcsICdMZWUnXSwgJy0nKVxyXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpXHJcbi8vIOW8guatpeWKoOi9vS0t5oeS5Yqg6L29LeivpuaDhemhtSAg5Li76aG1IOWQhOS4quiPnOWNlemhtemDveWPr+S7peWIhuW8gOadpeWKoOi9vVxyXG4vLyBhc3luYyBmdW5jdGlvbiBnZXRDb21wb25lbnQgKCkge1xyXG4vLyAgIGNvbnN0IHsgZGVmYXVsdDogXyB9ID0gYXdhaXQgaW1wb3J0KC8qd2VicGFja0NodW5rTmFtZTpcImxvZGFzaFwiKi8gJ2xvZGFzaCcpXHJcbi8vICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgZWxlbWVudC5pbm5lckhUTUwgPSdHb29vbydcclxuLy8gICByZXR1cm4gZWxlbWVudFxyXG4vLyB9XHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGltcG9ydCgvKiB3ZWJwYWNrUHJlZmV0Y2g6IHRydWUgKi8nLi9jbGljay5qcycpLnRoZW4oKHtkZWZhdWx0OiBffSkgPT4ge1xyXG4vLyAgICAgXygpXHJcbi8vICAgfSlcclxuLy8gICAvLyBnZXRDb21wb25lbnQoKS50aGVuKGVsZW1lbnQgPT4ge1xyXG4vLyAgIC8vICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KVxyXG4vLyAgIC8vIH0pXHJcbi8vIH0pXHJcbi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbi8vIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcclxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5J1xyXG4vLyBpbXBvcnQge3VpfSBmcm9tICcuL2pxdWVyeS51aSdcclxuXHJcbi8vIHVpKClcclxuXHJcbi8vIGNvbnN0IGRvbSA9ICQoJzxkaXY+Jyk7XHJcbi8vIGRvbS5odG1sKF8uam9pbihbJ2dvZ29nb2dvJywnbHloJ10sICctLS0tLScpKVxyXG4vLyAkKCdib2R5JykuYXBwZW5kKGRvbSlcclxuXHJcblxyXG5cclxuXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ });