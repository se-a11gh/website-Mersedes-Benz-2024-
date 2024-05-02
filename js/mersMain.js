/* Начальный слайдер */    
const dataSlider = new Promise((res, rej)=>{
    fetch("http://localhost/Portfolio/Gen_next/MersBenz/DB/catalog.json")
    .then(response => response.json())
    .then(data => res(data))
});

let Info_slideProp = document.querySelectorAll('.dataSlideJs p');
let massSlider = Array.from(Info_slideProp);
let btn_groups = document.querySelector('.btn_groups');
let btn_prev = document.querySelector('.prev');
let slindx = 1;
if(btn_prev){
    let btn_next = document.querySelector('.next');
    btn_prev.addEventListener('click', ()=>{plusSl(-1)});
    btn_next.addEventListener('click', ()=>{plusSl(1)});
    function plusSl(n) { showSl(slindx += n);
        dataSlider.then(
            data =>{
                function outDataSlider(indxData){
                    massSlider[0].textContent = data[indxData].name;
                    massSlider[1].textContent = data[indxData].speed_start;
                    massSlider[2].textContent = data[indxData].speed_max;
                    massSlider[3].textContent = data[indxData].capacity;
                    massSlider[4].textContent = data[indxData].price;
                }
                if(slindx == 1){ outDataSlider(0);}
                else if(slindx == 2){ outDataSlider(1);}
                else if(slindx == 3){ outDataSlider(2);}
            }
        )
    }
        
/* Начальный слайдер (фото) */    
function currSl(n) {showSl(slindx = n); console.log(slindx);}
    function showSl(n){
       let i; 
       let slides = document.querySelectorAll('.mySlide');
       let dots = document.querySelectorAll('.dot');
       if(n > slides.length){slindx = 1;}
       if(n < 1 ){slindx = slides.length;}
       for(i=0; i < slides.length; i++){
          slides[i].style.opacity = '0';
       }
       for(i=0; i < dots.length; i++){
          dots[i].className = dots[i].className.replace('active',"");
       }
       slides[slindx-1].style.opacity = '1';
       dots[slindx-1].className += ' active';
    }
    btn_groups.addEventListener('touchstart', handStart, false);
    btn_groups.addEventListener('touchmove', handMove, false);
    let x11 = null;
    let y11 = null;
    function handStart(e){
        const firT = e.touches[0];
        x11 = firT.clientX;
        y11 = firT.clientY;
    }
    function handMove(e){
    if(!x11 || !y11){
    return false;
    }
    let x2 = e.touches[0].clientX;
    let y2 = e.touches[0].clientY;
    let xD = x2 - x11;
    let yD = y2 - y11;
    if(Math.abs(xD) > Math.abs(yD)){
        if(xD > 0){plusSl(-1)}
        else{plusSl(1)}
    }
    x11 = null;
    y11 = null;
    }
}





/* LazyLoad */
function scrollPage(img, watcher){
    img.forEach((e)=>{
        if(e.intersectionRatio > 0 && !e.target.dataset.loaded){
            e.target.src = e.target.getAttribute('data-src');
            e.target.dataset.loaded = true;
        }
        console.log();
    })
}
const watcher = new IntersectionObserver(scrollPage, {
    root: null,
    rootMargin: '60px',
    threshold: 0.1
});
const img = document.querySelectorAll('.lazload');
img.forEach((e)=>{
    watcher.observe(e);
});





/* Скрытие / Показ панели об авто */
let btn_panel_hide = document.querySelector('.panel_more_hide div');
if(btn_panel_hide){
    let Bl1__slider_about = document.querySelectorAll('.Bl1__slider_about > div');
    btn_panel_hide.addEventListener('click', (el)=>{
      let span1 = el.target.parentElement.firstElementChild;
      let span2 = span1.nextElementSibling;
      span1.classList.toggle('fltr_op');
      span2.classList.toggle('fltr_op');
      span2.nextElementSibling.classList.toggle('arrow_hide');
      Bl1__slider_about.forEach((e, inx)=>{
        if(!span2.matches('.fltr_op') || inx == 0){
          e.classList.toggle('hide_panel');
        }else{
          e.classList.toggle('hide_panel');
        }
      })
      el.target.closest('.Bl1__slider_about').classList.toggle('info_car_panel');
    });
}



/* Анимация при скролле */
const animItems = document.querySelectorAll("._anim-items");
if(animItems.length > 0){
    window.addEventListener("scroll", animOnScroll);
function animOnScroll(){
for (let index = 0; index < animItems.length; index++) {
    const animItem = animItems[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    let animItemPoint = window.innerHeight - animItemHeight / 1.5;
    if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / 1.5;
    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
        animItem.classList.add("_active");
    }
}
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }   
  animOnScroll();
}