const nav =document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtbImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
  if ( nav.classList.toggle('open')) {
    nav.BtnImg.src = "./img/icons/nav-close.svg"
  } else {
    navBtnImg.src = './img/icons/nav-open.svg';
  }
}