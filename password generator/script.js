const outputElement = document.querySelector('#output')
const btnCopy = document.querySelector('#btn-copy');
const numberelement = document.querySelector('#number')
const passwordelement = document.querySelector('#length')
const smallelement = document.querySelector('#small')
const symbolelement = document.querySelector('#symbols')
const captialelement = document.querySelector('#capital')
const frm = document.querySelector('#frm')


//  btn click to password
btnCopy.addEventListener('click', async () => {
    const pass = outputElement.value;
    if (pass) {
        await navigator.clipboard.writeText(pass);
        alert("Copied To clipboard")

    }
    else {
        alert("there is no password to copy")
    }
});

function generateRandomChar(min, max) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);

}

function capitalvalue() {
    return generateRandomChar(65, 90);
}
function smallvalue() {
    return generateRandomChar(97, 122)
}
function numbervalue() {
    return generateRandomChar(48, 57);
}
function symbolvalue() {
    const symbols = "!@#$%^&*()_+=-:?><,./';{}[]\|"
    return symbols[Math.floor(Math.random() * symbols.length)]

}


const functionarray = [
    {
        element: numberelement,
        fun: numbervalue
    },
    {
        element: captialelement,
        fun: capitalvalue

    },
    {
        element: smallelement,
        fun: smallvalue

    },

    {
        element: symbolelement,
        fun: symbolvalue
    }

];

frm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const len=passwordelement.value;
    let generatedpassword="";


    const funarray=functionarray.filter(({element})=>element.checked)
    console.log(funarray)
    for(i=0;i<len;i++){
        const index=Math.floor(Math.random()*funarray.length);
        const letter=functionarray[index].fun();
        generatedpassword+=letter;
    }
    outputElement.value=generatedpassword;
})