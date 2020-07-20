import imgs from '../src/images/img01.jpg';
import style from './index.scss';

function createImg() {
  let img = new Image()
  img.src = imgs
  img.classList.add(style.img) // 在img图片上加一个img的样式
  let root = document.getElementById('root')
  root.append(img)
}
export default createImg;
