/* Общий popUp */
const popFone = document.querySelectorAll('.popup_js');
popFone.forEach((p)=>{
    p.addEventListener('click', (e)=>{
        if(e.target.dataset.close == 'cl1'){p.style.display = 'none';}
        if(e.target.dataset.close == 'cl2'){p.classList.remove('filter_show');}
    });
});



/* popUp call / messg */
let btnCall = document.querySelectorAll('.callPhone_js');
btnCall.forEach((c)=>{
c.addEventListener('click', (e)=>{
    e.preventDefault();
    popFone[0].style.display = 'flex';});
});



/* popUp Світ Mercedes-Benz */
let btnWMB = document.querySelector('.worldMB_js');
let wrap_popup_backgr = document.querySelector('.popup-worlM');
btnWMB.addEventListener('click', ()=>{popFone[1].style.display = 'flex';});
wrap_popup_backgr.addEventListener('mouseleave', (e)=>{
    popFone[1].style.display = "none";
});



/* Выпадающий список */
let listServise = document.querySelectorAll(".listJS_Up");
listServise.forEach((i)=>{
    let wrapListServ = document.querySelectorAll(".wrapListJS");
    i.addEventListener("click", ()=>{
        const sosed = i.nextElementSibling;
        sosed.style.cssText = `
        height: 200px;
        padding: 10px;
        `;
    });
    wrapListServ.forEach((w)=>{
        w.addEventListener('mouseleave', ()=>{
            const sosed = i.nextElementSibling;
            sosed.style.cssText = `
            height: 0px;
            padding: 0px;
            `;
        });
    });
});



/* Боковое меню */
let btnMenu = document.querySelector('.img_menuJS');
let btn_closeMenu = document.querySelector('.btn_closeMenuJS');  
let asideMenu = document.querySelector('.asideMenu');  
btnMenu.addEventListener('click', (e)=>{
    asideMenu.classList.add('asideMenu-show');
});
btn_closeMenu.addEventListener('click', (e)=>{
    asideMenu.classList.remove('asideMenu-show');
});



/* Фон хлебных крошек */
let breadcrums = document.querySelector('.wrapp_breadcrums');
if(breadcrums){
    window.addEventListener('scroll', ()=>{
        if(scrollY > 200){
            breadcrums.classList.add('breadcrums_backg-on');
        }else{breadcrums.classList.remove('breadcrums_backg-on');}
    });
}