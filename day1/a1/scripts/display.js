//here retrieve the generated number from Localstorage.
var final =JSON.parse(localStorage.getItem("number"));
//console.log(final);


function display(final){
    if(final==2 || final==3 || final==4 || final==5){
        var div=document.getElementById("show_number");
        div.innerText=final;
        div.style.color="red";
        
    }
    else if(final==1){
        var div=document.getElementById("show_number");
        div.innerText=final;
        div.style.color="yellow"; 
    }
    else{
        var div=document.getElementById("show_number");
        div.innerText=final;
        div.style.color="green";
    }
}

display(final);
