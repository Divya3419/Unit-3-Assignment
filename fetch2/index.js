
async function getweather() {

    try{
        let city=document.getElementById("city").value;
    
    let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=847d75de4265051f3b09b1b6a2474c30&units=metric
    `);
    
    let data= await res.json();
    appendDAta(data);
    console.log("data:",data);
    
    }
    catch (error){
        console.log("error:",error);
    }
       
    }
    
    function appendDAta(data){
    
        document.querySelector("#outer").innerHTML="";
    
        let maindiv=document.createElement("div");
    
    let name=document.createElement("h3");
    name.innerText=data.name;
    
    var mindiv=document.createElement("div");
    mindiv.style.display="grid";
    mindiv.style.gridTemplateColumns="repeat(2,1fr)"
    

    let temp_min=document.createElement("h3");
    temp_min.innerText=data.main.temp_min;
    
    var temp_minimg=document.createElement("img");
    temp_minimg.src="https://media.istockphoto.com/vectors/temperature-flat-vector-icon-weather-hot-and-cold-climate-for-web-vector-id1214037164";
    
    mindiv.append(temp_min,temp_minimg);

    let maxdiv=document.createElement("div");
    maxdiv.style.display="grid";
    maxdiv.style.gridTemplateColumns="repeat(2,1fr)";

    let temp_max=document.createElement("h3");
    temp_max.innerText=data.main.temp_max;

    let maximg=document.createElement("img");
    maximg.src="https://media.istockphoto.com/vectors/temperature-flat-vector-icon-weather-hot-and-cold-climate-for-web-vector-id1214037164";
    maxdiv.append(temp_max,maximg);

    let winddiv=document.createElement("div");
    winddiv.style.display="grid";
    winddiv.style.gridTemplateColumns="repeat(2,1fr)";
    var wind=document.createElement("h3");
    wind.innerText=data.wind.speed;
    
    let windimg=document.createElement("img");
    windimg.src="https://image.shutterstock.com/image-vector/image-cute-cloud-blowing-wind-260nw-1048046437.jpg";
    winddiv.append(wind,windimg);

    let clodiv=document.createElement("div");
    clodiv.style.display="grid";
    clodiv.style.gridTemplateColumns="repeat(2,1fr)";

    let clounds=document.createElement("h3");
    clounds.innerText=data.cod;
    let cloimg=document.createElement("img")
cloimg.src="https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"  ;

clodiv.append(clounds,cloimg);

let risediv=document.createElement("div");
risediv.style.display="grid";
risediv.style.gridTemplateColumns="repeat(2,1fr)"

    let sunrise=document.createElement("h3");
    sunrise.innerText=data.sys.sunrise;

    let riseimg=document.createElement("img");
    riseimg.src="https://xoxobella.com/wp-content/uploads/2021/06/sunrise_sunset_captions_puns_quotes_instagram-7.jpg";
    
    risediv.append(sunrise,riseimg);

    let setdiv=document.createElement("div");
    setdiv.style.display="grid";
    setdiv.style.gridTemplateColumns="repeat(2,1fr)"

    let sunset=document.createElement("h3");
    sunset.innerText=data.sys.sunset;

    let setimg=document.createElement("img");
setimg.src="https://qph.fs.quoracdn.net/main-qimg-95ae8529c74ca1203c1115820d0c6a9c-lq";

setdiv.append(sunset,setimg);
    
    maindiv.append(name,mindiv,maxdiv,winddiv,clodiv,risediv,setdiv);
    var div=document.createElement("div");
    
    let iframe=document.createElement("iframe");
    
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    
    div.append(iframe);
    
    
    
    document.querySelector("#outer").append(maindiv,div);
    
    }