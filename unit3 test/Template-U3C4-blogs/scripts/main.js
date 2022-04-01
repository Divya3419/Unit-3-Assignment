async function apiCall(url) {
 //add api call logic here
try{
let res= await fetch(url);
let data=await res.json();

return data;
}
catch(error){
    console.log("error",error);
}

}


function appendArticles(articles, main) {

    //add append logic here
articles.forEach((ele )=>{
    let div = document.createElement("div");
div.setAttribute('id','blog');

div.addEventListener("click",function(){
    window.location.href="blog.html";
    done(ele);
})

    let name=document.createElement("p");
    name.innerText=ele.title;
    let dis= document.createElement("p");
    dis.innerText=ele.description;
let img=document.createElement("img");
img.src=ele.urlToImage;
    div.append(name,dis,img);
    main.append(div);
})
}
let arr= JSON.parse(localStorage.getItem("article")) || [];
function done(ele){
    console.log(ele);
arr.push(ele);
localStorage.setItem("article",JSON.stringify(arr));
}

export { apiCall, appendArticles }