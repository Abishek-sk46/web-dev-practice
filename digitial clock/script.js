const clock=document.querySelector('.clock')


function runclock()
{
    var time=new Date();
    var hrs=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var text="AM";
    if(hrs>12){
        hrs=hrs-12;
        text="PM";
    }else if(hrs==0)
    {
        hrs=12;
        text="AM";
    }

    hrs=hrs<10?'0'+hrs:hrs;
    min=min<10?'0'+min:min;
    sec=sec<10?'0'+sec:sec;

    clock.innerHTML=`${hrs} : ${min} : ${sec} ${text}`
}
setInterval(runclock,1000)