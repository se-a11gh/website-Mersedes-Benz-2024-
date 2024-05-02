
/* Выборка фото */
let fotoBigBlock = document.querySelector('.texProd_foto__big');
if(fotoBigBlock){
let fotoBigImg = document.querySelector('.texProd_foto__big img');
let slide_small = document.querySelectorAll('.line_slide_small div img');
let currentImage = null;

slide_small.forEach((e) => {
e.addEventListener('click', () => {
    currentImage = fotoBigImg = e;
    fotoBigBlock.innerHTML = fotoBigImg.outerHTML;
});
});
}



/* Получение данных о машине */
let minifotoAddl = document.querySelectorAll('.minifotoAddl');
let templ_name = document.querySelectorAll('.templ_name');
let templ_sku = document.querySelector('.templ_sku span');
let templ_price = document.querySelector('.templ_price span');
let templ_type = document.querySelector('.templ_type span');
let templ_foto = document.querySelectorAll('.minifoto');
const  getCurrentUrl = window.location.href;
let massUrl = Array.from(getCurrentUrl);
let nubrId = parseInt(massUrl.pop());
async function abc(){
    const response = await fetch('http://localhost/Portfolio/Gen_next/MersBenz/DB/catalog.json');
    const data = await response.json();
    return data;
}
abc().then(
    data =>{
    templ_foto.forEach((f)=>{ f.src = data[nubrId].mass_photo[0];})
    minifotoAddl[0].src = data[nubrId].mass_photo[1];
    minifotoAddl[1].src = data[nubrId].mass_photo[2];
    minifotoAddl[2].src = data[nubrId].mass_photo[3];
    templ_name.forEach((tx)=>{tx.textContent = data[nubrId].name;})
    templ_sku.textContent = data[nubrId].sku;
    templ_price.textContent = data[nubrId].price;
    templ_type.textContent = data[nubrId].type;    
    }
);





/* Tab-лист характеристик авто */
let cont1 = document.querySelector('.cont1');
if(cont1){
if(window.innerWidth < 600){
    let blk_propList = document.querySelectorAll('.block_prop__1 .prop_js2');
    blk_propList.forEach((w)=>{
        w.addEventListener('click', (e)=>{
            e.target.parentNode.nextElementSibling.classList.toggle('actv_content');
        });
    });
}
let blk_p = document.querySelectorAll('.prop_js p');
blk_p.forEach((r)=>{
    r.addEventListener('click', (e)=>{
        blk_p.forEach((d)=>{ 
            d.classList.remove('actv_p');
        });
        e.target.classList.toggle('actv_p');
    });
});
let cont2 = document.querySelector('.cont2');
let cont3 = document.querySelector('.cont3');
let contX = document.querySelector('.texProd_foto');
let sumX = contX.getBoundingClientRect().height + 110;
let sum1 = sumX + cont1.getBoundingClientRect().height;
let sum2 = sum1 + cont2.getBoundingClientRect().height + 20;
let sum3 = sum2 + cont3.getBoundingClientRect().height;
let prop = document.querySelectorAll('.prop');

function moveScrollDown(sum1){
    window.scrollTo({
        top: sum1,
        left:0,
        behavior: 'smooth'
    });
  }
prop.forEach((w)=>{
    w.addEventListener('click', (e)=>{
        if(e.target.dataset.prop == 'sl1'){moveScrollDown(sumX);}
        if(e.target.dataset.prop == 'sl2'){moveScrollDown(sum1);}
        if(e.target.dataset.prop == 'sl3'){moveScrollDown(sum2);}
        if(e.target.dataset.prop == 'sl4'){moveScrollDown(sum3);}
    });
});
}
