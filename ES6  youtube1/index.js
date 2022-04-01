const search_result=document.querySelector("#search_result");
const searchvdo = async ()=>{

    try{
let input=document.getElementById("search").value;

let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyDm04qf_MyQgL_RAJJ-81YWipXLXigCy2g&maxResults=20`);

let data = await res.json();

let vdos= data.items;
appendvdos(vdos);

console.log("data:",data);

    }
    catch (error){
        console.log("error:",error);
    }
}

const appendvdos= (data)=>{
    search_result.innerHTML="";
data.forEach((ele)=>{
    let div=document.createElement("div");

    let name= document.createElement("p");
    name.innerText=ele.snippet.title;

    // let iframe= document.createElement("iframe");
    // iframe.src=`https://www.youtube.com/embed/${ele.id.videoId}`

let img=document.createElement("img");
img.src=ele.snippet.thumbnails.high.url;

img.addEventListener("click",function(){
    showvdo(ele);
});

    div.append(img,name);
    search_result.append(div);
})
}
 
//next process
let show= JSON.parse(localStorage.getItem("video")) || [];

function showvdo(data) {

localStorage.setItem("video",JSON.stringify(data));
window.location.href="show.html";
}


///display


let url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=In&key=AIzaSyDm04qf_MyQgL_RAJJ-81YWipXLXigCy2g&maxResults=20`;
    const display=document.querySelector("#display");
const popular = async ()=> {
    try{
        let res1= await fetch(url);

        let data1= await res1.json();

        let page=data1.items;
        appendDisplay(page);
        console.log("data1:",data1);
    }
    catch (error){
        console.log("Error:",error);
    }
}
popular();

const appendDisplay= (data1)=>{

data1.forEach((ele)=>{
    let div1=document.createElement("div");

    let name1= document.createElement("p");
    name1.innerText=ele.snippet.title;

let iframe= document.createElement("iframe");
iframe.src=`https://www.youtube.com/embed/${ele.id}`;



    div1.append(iframe,name1);
    display.append(div1);
})
}


