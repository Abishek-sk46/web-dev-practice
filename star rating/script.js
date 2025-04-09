const stars=document.querySelectorAll('.star');
const currennt_rating=document.querySelector('.current-rating')

stars.forEach((star,index)=>{
    star.addEventListener('click',()=>{
        let current_star=index+1;
        currennt_rating.innerText=`${current_star} of 5`;

        stars.forEach((star,i)=>{
            if(current_star>=i+1){
                star.innerHTML='&#9733'
            }else{
                star.innerHTML='&#9734'
            }
        })
        
        })
      

    })
