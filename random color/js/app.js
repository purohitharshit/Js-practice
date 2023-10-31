const getcolor = () =>{

    const randomNo = Math.floor(Math.random()*16777215);
    const randomCode = "#" + randomNo.toString(16);
    document.body.style.backgroundColor = randomCode;

    document.getElementById("color-code").innerText = randomCode;
}



//initial call
getcolor();

document.getElementById("btn").addEventListener("click",
    getcolor
    )