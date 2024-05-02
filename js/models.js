/* Вывод карточек */
const block = document.querySelector(".Block1_models");
const cardModel = document.querySelector('.Card_model');
if(block){
    for (let i = 0; i < 5; i++) {
        const clonedChild = cardModel.cloneNode(true);
        block.appendChild(clonedChild);
      }
}

/* Получение данных для карточек */
let card_photo = document.querySelectorAll('.Card_model__photo img');
let gopage = document.querySelectorAll('.gopage');
let card_categ = document.querySelectorAll('.Card_model__about p:first-child');
let card_prop = document.querySelectorAll('.Card_model__about p:last-child');
let card_name = document.querySelectorAll('.Card_model__name p:first-child');
let card_price = document.querySelectorAll('.Card_model__name p:last-child');

async function readFile() {
    const data = await fetch("http://localhost/Portfolio/Gen_next/MersBenz/DB/catalog.json");
    const obj = await data.json();

    card_photo.forEach((arr, index) => {
        const carData = obj[index].mass_photo[0];
        arr.src = carData;
    });
    card_categ.forEach((arr, index) => {
        const carData = obj[index].type;
        arr.textContent = carData; 
    });
    card_prop.forEach((arr, index) => {
        const carData = obj[index].properts;
        arr.textContent = carData; 
    });
    card_name.forEach((arr, index) => {
        const carData = obj[index].name;
        arr.textContent = carData; 
    });
    card_price.forEach((arr, index) => {
        const carData = obj[index].price;
        arr.textContent = carData; 
    });

    return obj;
}
readFile().then(
    obj =>{
/* Переход по соответствующей карточки */
gopage.forEach((ar, index) => {
    ar.addEventListener('click', (e)=>{
        e.preventDefault();
        const productId = index;
        const productUrl = `templ-auto.php?${productId}`;
        window.location.href = productUrl;
    });
});
});


/* Фильтр моделей */
let filter = document.querySelector('.rigth_filter_js');
if(filter){
    let filter_block = document.querySelector('.filter_backgrnd');
    let btn_cls_filter = document.querySelector('.btn_cls_filter');
    filter.addEventListener('click', ()=>{
        filter_block.classList.toggle('filter_show');
    });
    btn_cls_filter.addEventListener('click', ()=>{
        filter_block.classList.toggle('filter_show');
    }); 
}