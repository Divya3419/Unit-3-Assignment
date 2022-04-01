const getdata = async(url)=>{
try{
let res= await fetch(url);
let data= await res.json();
return data;
}
catch(error){
    console.log("error",error);
}
}

const appenddata =(data,parent)=>{
    parent.innerHTML=null;
    data.meals.forEach(({strMealThumb,strMeal})=>{
      let div=document.createElement("div");
  
      let img=document.createElement("img");
      img.src=strMealThumb;
  
      let name=document.createElement("p");
      name.innerText=strMeal;
      name.style.color="white";
      
      div.append(name,img);
parent.append(div);
    })
  }


  export {getdata,appenddata};

  