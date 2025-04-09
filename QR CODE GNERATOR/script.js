const frm=document.querySelector('#frm');
const qrcode=document.querySelector('#output');
const spinner=document.querySelector('#loading');
const qrcodeelement=document.querySelector('#qrcode');
const btnsave=document.querySelector('#btn-save');
console.log(btnsave)

function generateqrcode(e){
    e.preventDefault();
    const url=document.querySelector('#url').value;
    const size=document.querySelector('#size').value;
    const clrdark=document.querySelector('#colordark').value;
    const clrlight=document.querySelector('#colorlight').value;


    if(url==''){
        alert("Please Enter Your website Link")
    }else{
        spinner.style.display='flex';
        setTimeout(()=>{
            spinner.style.display='none';
            console.log(qrcodeelement)
            qrcodeelement.innerHTML="";

            const qrcode=new QRCode('qrcode',{
                text:url,
                width:size,
                height:size,
                colorDark:clrdark,
                colorLight:clrlight,
                correctLevel:QRCode.CorrectLevel.H
            })
        },1000)
 createDownloadLink();   
    }
}

frm.addEventListener('submit',generateqrcode)


function createDownloadLink(){
const imgsrc=qrcodeelement.querySelector('img').src;
btnsave.href=imgsrc;
}

btnsave.addEventListener('click',()=>{
    
    setTimeout(()=>{
    btnsave.download='qrcode';
},50);
});