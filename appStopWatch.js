let hrs = 0;
let min = 0;
let sec = 0;
let intervel;

function update () {
    sec++;
    if(sec === 60) {
        sec = 0;
        min++;
    }

    if(min === 60) {
        min = 0;
        hrs++;
    }

    document.getElementById('display').innerText = 
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (min < 10 ? "0" : "") + min + ":" +
    (sec < 10 ? "0" : "") + sec;
}

function start () {
    intervel = setInterval(update , 1000);
}

function stop () {
    clearInterval(intervel);
}

function reset () {
    clearInterval(intervel);
    hrs = 0;
    min = 0;
    sec = 0;
    document.getElementById('display').innerText = "00:00:00";
}