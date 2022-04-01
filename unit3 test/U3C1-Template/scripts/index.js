//store the products array in localstorage as "products"
document.querySelector("#product_form").addEventListener("submit",product);


var arr= JSON.parse(localStorage.getItem("products")) || [];

function product(event){
    event.preventDefault();
    var obj={
 name:document.getElementById("name").value,
 price:document.getElementById("price").value,
 type:document.getElementById("type").value,
 image:document.getElementById("image").value

    }
arr.push(obj);
console.log(arr);
localStorage.setItem("products",JSON.stringify(arr));
}

document.querySelector("#show_products").addEventListener("click",next);

function next() {
    window.location.href="inventory.html";
}