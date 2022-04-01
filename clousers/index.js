let timerid;

let movie=document.getElementById("movie");
let star=document.getElementById("star");

async function searchmovie() {
    try{

let input=document.getElementById("query").value;


///check data come or not console.log(input);


let res =await fetch(`https://www.omdbapi.com/?apikey=db274cec
&s=${input}`);

let data=await res.json();
return data.Search;

console.log("data:",data)
    }

    catch(error){
        console.log("error:",error);
    }
}

function appendMovie(data){

    movie.innerHTML="";
if(data===undefined){
    return false;
}
data.forEach(function(ele){
    let img=document.createElement("img");
    img.src=ele.Poster;
var div=document.createElement("div");

    let p=document.createElement("p");
    p.innerText=ele.Title;

    let yor=document.createElement("p");
    yor.innerText=ele.Year;
    
    let imdb=document.createElement("p");
    imdb.innerText=ele.imdbID;
    
    div.append(p,yor,imdb);
    star.append(img,div);
    star.addEventListener("click",function (){
    page(ele);
    });
    movie.append(star);
});

}

// extra work
async function main(){
try{
    let data=await searchmovie();
    if(data===undefined){
        return false;
    }
    console.log(data);
    appendMovie(data);
}
catch(error){
    console.log(error);
}
}


function dbounce(func,delay){
    

    if(timerid){
        clearTimeout(timerid);
    }
   timerid= setTimeout(function(){

func();  //staill main function

    },delay);
}

document.querySelector("#movie").addEventListener("click",moviedetail);

function moviedetail(){
    window.location.href="display.html"
}

function page(data){

console.log("data:",data);

localStorage.setItem("store",JSON.stringify(data));



}




///trending [page]

let url="https://api.themoviedb.org/3/trending/all/day?api_key=c6b16da5ebfdc876ea893ca73bb2a525";



var data;
   async function getData(){

    try{
        let res=await fetch(url);

 data=await res.json();
console.log("data:",data.results);
appendProducts(data.results)
    }
    catch(error){
        console.log("error:",error);
    }

    }

getData();

 function appendProducts(data){

data.forEach(function(ele){
    let maindiv=document.createElement("div");

    let img=document.createElement("img");
    img.src=`https://image.tmdb.org/t/p/w500/${ele.poster_path}`




    

    let category=document.createElement("p");
    category.innerText=ele.media_type;

    let original_title=document.createElement("p");
    original_title.innerText=ele.original_title;

    
    let release_date=document.createElement("p");

    release_date.innerText=ele.release_date;

    let vote_average=document.createElement("p");
    vote_average.innerText=ele.vote_average;


maindiv.append(img,category,original_title,release_date,vote_average);

document.querySelector("#outer").append(maindiv);

});

}