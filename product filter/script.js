const buttons= document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box')
const searchbox=document.querySelector('#search');


searchbox.addEventListener('keyup',(e)=>{
    searchtext=e.target.value.toLowerCase().trim();

    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchtext)){
            box.style.display="block";
        }
        else{
            box.style.display="none";
        }

    })
    buttons[0].classList.add('btn-clicked');
});


buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        setactivebtn(e);
        const btnfilters=e.target.dataset.filter;
        
        boxes.forEach(box=>{
            if(btnfilters=='all'){
                box.style.display="block"
            }
            else{
                const boxfilter=box.dataset.item;
                if(btnfilters==boxfilter)
                {
                    box.style.display='block';
                }
                else{
                    box.style.display='none';
                }
            }
        })
    });
});


function setactivebtn(e){
    buttons.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked')
}