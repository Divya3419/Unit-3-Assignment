//Store the generated number in LocalStorage with key "number".

document.querySelector("#throw_dice").addEventListener("click",show_dice);

function show_dice() {
    let num=Math.floor(Math.random()*6)+1;
    
    window.location.href="display.html";
    localStorage.setItem("number",JSON.stringify(num));
}



