
const timeDiv = document.getElementsByClassName('time-box');
const greetDiv = document.getElementById('greet-text');

function timedis(){
    let timeClock = new Date(),
    hrs=timeClock.getHours(),
    mins=timeClock.getMinutes(),
    sec=timeClock.getSeconds();
    timeDiv[0].innerText= hrs+':'+zeroParse(mins)+':'+zeroParse(sec)+'  '+ amPm();
    
    function zeroParse(n){
        return (parseInt(n,10)<10 ? "0" : '') +n;
    }

    //am pm 
    function amPm(){
        return (hrs<12 && hrs>=0 ? 'am' : 'pm');
    }

    function backgroundimg(){
        if(hrs<12){
            document.body.style.backgroundImage = "url(./img/morning.jpg)";
            greetDiv.innerHTML='Good Morning';
        }else if(hrs<17){
            document.body.style.backgroundImage = "url(./img/afternoon.jpg)";
            greetDiv.innerHTML='Good Afternoon';
        }else if(hrs<21){
            document.body.style.backgroundImage = "url(./img/evening.jpg)";
            greetDiv.innerHTML='Good Evening';
        }else{
            document.body.style.backgroundImage = "url(./img/night.jpg)";
            greetDiv.innerHTML='Time to bed <br> Good Night';
        }
    }

    backgroundimg();
}
// let x = setInterval(timedis,1000);

setInterval(timedis,1000);