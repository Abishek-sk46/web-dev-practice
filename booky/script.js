var popover=document.getElementById("popoverlay");
var popupbox=document.getElementById("popbx")
var popupbtn=document.getElementById("plusbut")


 popupbtn.addEventListener("click",function(){
    popover.style.display="block";
    popupbox.style.display="block";

 })

 //select cancel button
 var cancelbutton=document.getElementById("cancelbtn");


 cancelbutton.addEventListener("click",function(event){
   event.preventDefault()
   popover.style.display="none";
    popupbox.style.display="none";
 }
)
//select overall container,book conatiner,title-input,authorinput,descriptioninput
var container=document.querySelector(".cont1")
var addbook=document.getElementById("addbtn")
var booktitle=document.getElementById("booktitleinput")
var bookauthor=document.getElementById("bookauthorinput")
var bookdescription=document.getElementById("bookdescriptioninput")


addbook.addEventListener("click",function(event)
{
   event.preventDefault()
   var div=document.createElement("div")
   div.setAttribute("class","container-book")
   div.innerHTML=`<h2>${booktitle.value}</h2>
   <h5>${bookauthor.value}</h5>
   <p>${bookdescription.value}</p>
   <button onclick="deletebook(event)">Delete</button>`
   
   container.append(div)
   popover.style.display="none";
    popupbox.style.display="none";

})
function deletebook(event)
{
   event.target.parentElement.remove()
}