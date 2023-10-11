const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuMobileIcon = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productDetailSecondary = document.querySelector(".product-detail-secondary");
const categorias = document.querySelectorAll(".boton-categoria")


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
    
    closeProductDetailSecondary();

    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailSecondaryClosed = productDetailSecondary.classList.contains("inactive");

    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add("inactive");
    }

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
       
    }

    if(!isProductDetailSecondaryClosed) {
        productDetailSecondary.classList.add("inactive");
    }

    productDetail.classList.toggle("inactive");
}

function openProductDetailSecondary() {
    productDetail.classList.add("inactive");
    productDetailSecondary.classList.remove("inactive");

}

function closeProductDetailSecondary() {
    productDetailSecondary.classList.add("inactive");
    
}


menuEmail.addEventListener("click", toggleDesktopMenu);
menuMobileIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleProductDetail);
productDetailCloseIcon.addEventListener("click", closeProductDetailSecondary);


categorias.forEach((categoria) =>  {
    categoria.addEventListener("click", (e)  =>  {       //agrega el escuchador de evento click a cada categoria

        categorias.forEach((cat) => 

            cat.classList.remove("selected"));          //remueve la clase de cada categoria
            categoria.classList.add("selected");        //agrega la clase a la categoria clickeada



            if(e.currentTarget.id != "all") {
                const productFiltered = productList.filter(producto => producto.categoria.id === e.currentTarget.id);   //agrega los productos filtrados 
                renderProducts(productFiltered);  
            } else {
                renderProducts(productList);
            }
    
    })
    
});



const productList = [];

productList.push({
    price: 120,
    name: "Bike",
    categoria: {
        nombre: "others",
        id: "others"
    },
    img:"https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
});
productList.push({
    price: 199,
    name: "Desk Lamp",
    categoria: {
        nombre: "furiture",
        id:"furiture"
    },
    img:"https://images.pexels.com/photos/18280834/pexels-photo-18280834/free-photo-of-cama-lampara-decorativo-mesita-de-noche.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 390,
    name: "Couch",
    categoria: {
        nombre: "furiture",
        id: "furiture"
    },
    img:"https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 99,
    name: "Hanging Mirror",
    categoria: {
        nombre: "furiture",
        id: "furiture"
    },
    img:"https://images.pexels.com/photos/1528975/pexels-photo-1528975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 59,
    name: "Blue Bag",
    categoria: {
        nombre: "others",
        id: "others"
    },
    img:"https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 129,
    name: "Pinting",
    categoria: {
        nombre: "furiture",
        id: "furiture"
    },
    img:"https://images.pexels.com/photos/18254580/pexels-photo-18254580/free-photo-of-casas-pared-pintura-casa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 69,
    name: "Gardening Kit",
    categoria: {
        nombre: "Gardening",
        id: "Gardening"
    },
    img:"https://images.pexels.com/photos/6231726/pexels-photo-6231726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 1589,
    name: "Lawnmower",
    categoria: {
        nombre: "Gardening",
        id: "Gardening"
    },
    img:"https://images.pexels.com/photos/9229821/pexels-photo-9229821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 29,
    name: "Sweater",
    categoria: {
        nombre: "clothes",
        id: "clothes"
    },
    img:"https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    price: 45,
    name: "wooden train",
    categoria: {
        nombre: "toys",
        id: "toys"
    },
    img:"https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

function renderProducts(arr){

    cardsContainer.innerHTML = '';

    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.img);
        productImg.addEventListener("click", openProductDetailSecondary);
    
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

