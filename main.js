const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    const isAsideclosed = aside.classList.contains('inactive');
    if (!isAsideclosed){
        aside.classList.toggle('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
      }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive');

 if (!isMobilMenuClosed){
            mobileMenu.classList.add('incative')
        }

    aside.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
})
productList.push({
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});

productList.push({
    name:'Compu',
    price:620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    productList.push({
        name: 'bike',
        price: 120,
        image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    })
    productList.push({
        name:'Pantalla',
        price:220,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
    
    productList.push({
        name:'Compu',
        price:620,
        image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
        

function renderProdcuts(arr){
    for (product of arr){
   const  productCart = document.createElement('div');
   productCart.classList.add('product-card');

   const productImg = document.createElement('img');
   productImg.setAttribute('src', product.image);

   const productInfo = document.createElement('div');
   productInfo.classList.add('product-info');

   const productInfoDiv = document.createElement('div');
   
   const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
   const productName = document.createElement('p');
   productName.innerText = product.name;

   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);
   
   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCart.appendChild(productImg);
   productCart.appendChild(productInfo);

   console.log(productCart);
   cardsContainer.appendChild(productCart);
}
}

renderProdcuts(productList);