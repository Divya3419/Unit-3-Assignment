let url="https://masai-food-api.herokuapp.com/api/meals/india";

async function dish(){
    try{
let res =await fetch(url);

let data=await res.json();
appendDish(data[0].meals);

console.log("data:",data);
    }
    catch (error){
        console.log("error:",error);
    }
}

dish();

function appendDish(data){
    if(data==undefined){
        return false;
    }
    data.map(function(ele){

        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.strMealThumb;
        let name=document.createElement("p");
        name.innerText=ele.strMeal;

        let price=document.createElement("p");
        price.innerText=ele.price;

        let btn=document.createElement("button")
        btn.innerText="Add to Cart";
        btn.setAttribute('id','addtocart');
        
        btn.addEventListener("click",function(){
            cArt(ele);

        })
        div.append(img,name,price,btn)
        document.querySelector("#menu").append(div);
    })
}
let count=0 ;
let cartarr= JSON.parse(localStorage.getItem("cart")) || [];
function cArt(ele){
    count++;
    console.log(ele);
    cartarr.push(ele);
    localStorage.setItem("cart",JSON.stringify(cartarr));
}
