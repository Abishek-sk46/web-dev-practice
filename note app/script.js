const containerelement = document.getElementById("container");
const btnadd= document.getElementsByClassName("btn-Add")[0];


function getappstorage(){
    return JSON.parse(localStorage.getItem("abi-app")) ||"[]";

}
getappstorage().forEach(element => {
   const textElement= createtextelement(element.id,element.content);
    containerelement.insertBefore(textElement,btnadd)
    
});

function createtextelement(id,content){
const textElement=document.createElement('textarea');
textElement.classList.add('sticky');
textElement.value=content;
textElement.placeholder='Enter Your Notes'
textElement.addEventListener("change",()=>{
    updatenote(id,textElement.value)
})
textElement.addEventListener("dblclick",()=>{
    const check = confirm("Are You Sure to Delete ?");
    if(check)
    {
        deletenotes(id,textElement)
    }
})

return textElement;
}

// add new sticky

function addsticky(){
    const notes = getappstorage()
    const noteObject={
        id:Math.floor(Math.random()*100000),
        content:""
    }
    textElement=createtextelement(noteObject.id,noteObject.content);
    containerelement.insertBefore(textElement,btnadd);
    notes.push(noteObject)
    savenotes(notes)

}

btnadd.addEventListener('click',()=>addsticky())

function savenotes(notes){
    localStorage.setItem("abi-app",JSON.stringify(notes))
}

// upadate
function updatenote(id,content){
    const notes =getappstorage();
    const updateelement=notes.filter((note)=>note.id==id)[0];
    updateelement.content=content;
    savenotes(notes);
}

function deletenotes(id,textElement){
    const notes =getappstorage().filter((note)=>note.id!=id);
    savenotes(notes);
    containerelement.removeChild(textElement)
}