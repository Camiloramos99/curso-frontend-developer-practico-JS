const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");



function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if(!isProductDetailClosed) {       /*si detalle de producto esta abierto */
        productDetail.classList.add("inactive")    /*cierralo */

    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");
    
    if(!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }


    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}

menuEmail.addEventListener("click", toggleDesktopMenu);

menuMobileIcon.addEventListener("click", toggleMobileMenu);

shoppingCartIcon.addEventListener("click", toggleProductDetail);

const productList = [];

productList.push({
    price: 120,
    name: "Bike",
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    price: 200,
    name: "tv",
    img:"https://images.pexels.com/photos/17233395/pexels-photo-17233395/free-photo-of-flores-vintage-retro-television.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    price: 1300,
    name: "pc",
    img:"https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&w=600",
});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
    
        const productName = document.createElement("p");
        productName.innerText = product.name; 
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

