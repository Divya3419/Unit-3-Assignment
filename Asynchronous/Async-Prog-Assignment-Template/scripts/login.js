var reGuser = JSON.parse(localStorage.getItem("signup"));

console.log(reGuser);

document.getElementById("login").addEventListener("submit", detailsubmit);





function detailsubmit(event) {
    event.preventDefault();


    let email = document.querySelector("#email").value;

    let password = document.querySelector("#password").value;



    var flag = false;
    for (var i = 0; i < reGuser.length; i++) {

        if (reGuser[i].email == email && reGuser[i].password == password) {
            flag = true;
        }
    }
    if (flag == true) {
        alert("login Success");

        window.location.href = "index.html"
    }

    else {
        alert("invalid Credentials");
    }



}; 