document.querySelector("#add_product").addEventListener("click",pre);
function pre(){
window.location.href="index.html";
        }


var arr= JSON.parse(localStorage.getItem("products")) || [];
//console.log(arr);



arr.map(function(ele,index){
    var div=document.createElement("div");

    let name=document.createElement("p");
    name.innerText=ele.name;
    var price=document.createElement("p");
    price.innerText=ele.price;
    var type=document.createElement("p");
    type.innerText=ele.type;
var img=document.createElement("img");
    img.src=ele.image;



    var btn=document.createElement("button");
    btn.innerText="remove product";
    btn.addEventListener("click",function(){
        arr.splice(index,1);
        localStorage.setItem("products",JSON.stringify(arr));

        
    })

div.append(type,img,name,price,btn)

document.querySelector("#products_data").append(div);


    
})



   