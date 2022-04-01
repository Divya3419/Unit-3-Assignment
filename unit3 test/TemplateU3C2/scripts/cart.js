let cartarr= JSON.parse(localStorage.getItem("cart"));

console.log(cartarr);

cartarr.map(function(ele){
    let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=ele.strMealThumb;
        let name=document.createElement("p");
        name.innerText=ele.strMeal;

        let price=document.createElement("p");
        price.innerText=ele.price;

let btn=document.createElement("button");
btn.innerText="Remove";
btn.setAttribute('id','remove');


        div.append(img,name,price,btn)
        document.querySelector("#cart").append(div);

        
    });

    
