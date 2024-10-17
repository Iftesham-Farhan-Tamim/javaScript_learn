
const clock = document.querySelector("#clock");

setInterval(function (){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

    // clock.innerHTML = date.toLocaleDateString();
    // clock.innerHTML = date.toLocaleString();
    // clock.innerHTML = date.toTimeString();
    // clock.innerHTML = date.toUTCString();
}, 1000);