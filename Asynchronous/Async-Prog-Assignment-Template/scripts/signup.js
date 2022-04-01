document.querySelector("#signup").addEventListener("submit",detail);

var userarr= JSON.parse(localStorage.getItem("signup")) || [];
//console.log(userarr);

function detail(event){
    event.preventDefault();

    function usersignup(n,ph,e,p){
        this.name=document.querySelector("#name").value;
        this.number=document.querySelector("#number").value;
        this.email=document.querySelector("#email").value;
        this.password=document.querySelector("#password").value;


    }


    let username= new usersignup(name,number,email,password);
console.log(username);
    userarr.push(username);
    

localStorage.setItem("signup",JSON.stringify(userarr));

}