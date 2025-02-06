document.querySelector("#signup").addEventListener("submit", detail);

var signuparr = JSON.parse(localStorage.getItem("signup")) || [];
//console.log(userarr);

function detail(event) {
    event.preventDefault();

    let signup = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value


    }
    console.log(signup);
    signuparr.push(signup);


    localStorage.setItem("signup", JSON.stringify(signuparr));

}