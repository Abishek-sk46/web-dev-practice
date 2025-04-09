const imgs = document.querySelectorAll('.img a');
let imgid = 1;
const imgdiv=document.querySelectorAll('.img')


imgs.forEach((img) => {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        imgid = img.dataset.id;

        imgdiv.forEach((img)=>{
            img.classList.remove('active')
        })

        img.parentElement.classList.add('active')
        moveImage();
    });
});







function moveImage() {
    const imgwidth = document.querySelector('.main-image img:first-child').clientWidth;

    let width=(imgid-1)*imgwidth;
    document.querySelector('.main-image').style.transform=`translateX(${-width}px)`

}


const minusbtn=document.querySelector('#minus');
const plusbtn=document.querySelector('#plus')
const qtytxt=document.querySelector("#qty");
// qtytxt.value=1

minusbtn.addEventListener('click',()=>{
    let qty=qtytxt.value;
    if(qty>0){
        qty--;
        qtytxt.value=qty;
    }
    
   
})

plusbtn.addEventListener('click',()=>{
    let qty=qtytxt.value;
    if(qty>0&&qty<5){
        qty++;
        qtytxt.value=qty;
    }
    
    
})