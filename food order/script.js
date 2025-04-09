const btncart = document.querySelector('#cart-icon')
const cart = document.querySelector('.cart')
const btnclose = document.querySelector('#cart-close')

btncart.addEventListener('click', () => {
    cart.classList.add('cart-active')
});

btnclose.addEventListener('click', () => {
    cart.classList.remove('cart-active')
});

document.addEventListener('DOMContentLoaded', loadfood);

function loadfood() {
    loadContent();

}

function loadContent() {
    // remove items 
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click', removeitems);
    });

    // productitem change evenet
    let qtyelement = document.querySelectorAll('.cart-quantity');

    qtyelement.forEach((input) => {
        input.addEventListener('click', cahngeqty);
    });

    // Remove Item
    let cartsbtns = document.querySelectorAll('.add-cart');
    cartsbtns.forEach((btn) => {
        btn.addEventListener('click', addcart)
    }
    )

    // update total
    updatetotal()

}

function removeitems() {
    if (confirm("are you sure to remove")){
        let title=this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList=itemList.filter(el=>el.title!=title)
        this.parentElement.remove();
        loadContent()
}
}

function cahngeqty() {
    if (isNaN(this.value) || this.value < 1)
        this.value = 1;


    loadContent()
}
let itemList=[];

// add cart
function addcart() {
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let imgsrc = food.querySelector('.food-img').src;
    // console.log(price,title,imdsrc)
    let newproduct = {title, price, imgsrc};
    if(itemList.find((el)=>el.title==newproduct.title)){
        alert("Product Already added in Cart")
        return;
    }
    else{
        itemList.push(newproduct)
    }




    let newproductelement = createcart(title, price, imgsrc)
    let element = document.createElement('div');
    element.innerHTML = newproductelement;
    let cartbasket = document.querySelector('.cart-content');

    cartbasket.append(element);
    loadContent()
}

function createcart(title, price, imgsrc) {
    return `<div class="cart-box">
    <img
      src="${imgsrc}"
      class="cart-img"
      alt=""
    />
    <div class="detail-box">
      <div class="cart-food-title">${title}</div>
      <div class="price-box">
        <div class="cart-price">${price}</div>
        <div class="cart-amt">${price}</div>
      </div>
      <input
        type="number"
        value="1"
        class="cart-quantity"
        name=""
        id=""
      />
    </div>
    <ion-icon name="trash" class="cart-remove"></ion-icon>
  </div>`
}

function updatetotal(){
    const cartItems=document.querySelectorAll('.cart-box')
    const totalValue=document.querySelector('.total-price')

    let total =0;
    cartItems.forEach((product=>{
           let priceelement=product.querySelector('.cart-price');
           let price=parseFloat(priceelement.innerHTML.replace("Rs.",""));
           let qty=product.querySelector('.cart-quantity').value;
           total+=(price*qty)
           product.querySelector('.cart-amt').innerText="Rs."+(price*qty);

    }));
    totalValue.innerHTML='Rs .'+total;

    const cartcount=document.querySelector('.cart-count')
    let count=itemList.length;
    cartcount.innerHTML=count;

    if(count==0){
        cartcount.style.display='none';
    }
    else{
        cartcount.style.display='block';
    }

}