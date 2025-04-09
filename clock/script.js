const hours=document.querySelector('.hrs');
const minutes=document.querySelector('.min');
const seconds=document.querySelector('.sec');










setInterval(runClock,1000)





function runClock(){
    const time=new Date();
    const sec=(time.getSeconds())/60
    const min=(sec+time.getMinutes())/60;
    const hrs=(min+time.getHours())/12;
    console.log(hrs,min,sec);
   hours.style.setProperty('--rotation',hrs*360)
   minutes.style.setProperty('--rotation',min*360)
   seconds.style.setProperty('--rotation',sec*360)
}
runClock()


    
