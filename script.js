
function countdown(){
    const daysEl=document.getElementById('days');
const hoursEl=document.getElementById('hours');
const minsEl=document.getElementById('mins');
const secondsEl=document.getElementById('seconds');
const newYears='1 Jan 2022';
    const newYearsDate=new Date(newYears);
    const currentDate= new Date();
    const TotalSeconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(TotalSeconds/3600/24);
    const hours=Math.floor(TotalSeconds/3600)%24;
    const mins=Math.floor(TotalSeconds/60)%60;
    const seconds=Math.floor(TotalSeconds%60);

    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours;
    minsEl.innerHTML=mins;
    secondsEl.innerHTML=seconds;
    
    console.log(days,hours,mins,seconds);

}
countdown();
setInterval(countdown,1000);