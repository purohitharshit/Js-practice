const endDate = "23 December 2023 05:00:00 PM";

document.getElementById("end-date").innerText = endDate;

const inputs = document.querySelectorAll("input");

function clock(){

    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now)/1000;//  /1000 makes it in seconds

    if(diff<0) return;
    inputs[0].value = Math.floor(diff/3600/24);
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60);

}

//initial call
clock();

setInterval(()=>{
    clock();
},1000);