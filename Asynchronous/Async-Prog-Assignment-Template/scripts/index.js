var obj=[
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Best-Movie-Franchises-To-Binge-Watch.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
    
        "https://catholicreview.org/wp-content/uploads/2021/07/20210623T1100-MOVIE-REVIEW-F9-FAST-SAGA-1250672.jpg",
    "https://cdn.digitbin.com/wp-content/uploads/Top-best-Android-Apps-to-watch-and-stream-free-movies-online.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRmg4fu2C__gj4KVUH0hZ9jwJu-yLynUfLJQ&usqp=CAU"
    ,
    
    ];

    localStorage.setItem("images",JSON.stringify(obj));
let images=JSON.parse(localStorage.getItem('images')) || []



let slideshow=document.getElementById("slideshow");


let i=0;

setInterval (function(){
  if(i==images.length){
    i=0;
  }
  let image=images[i];

  slideshow.innerHTML=null;

  let img=document.createElement("img");
  img.src=image;

  slideshow.append(img);
  i++;
},2000);





var obj2=[
    {
        image_url:
          "https://static.toiimg.com/photo/89726146.cms?resizemode=4",
        name: "THE KASHMIR FILES",
        release_date: "2022",
        rating: "10",
      },
      {
        image_url:
          "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg",
        name: "Multi movies",
        release_date: "2018",
        rating: "8",
      },
      {
        image_url:
          "https://i.ytimg.com/vi/NpJ6lnbgi_s/maxresdefault.jpg",
        name: "Check",
        release_date: "2018",
        rating: "4",
      },
      {
        image_url:
          "https://cdn.mos.cms.futurecdn.net/pThcymdkCEp9RgyJDsWLPV.jpg",
        name: "Avtar",
        release_date: "2015",
        rating: "6",
      },
      {
        image_url:
          "https://i.ytimg.com/vi/tPXYWRGNl7s/maxresdefault.jpg",
        name: "Ready",
        release_date: "2012",
        rating: "8",
      },
      {
        image_url:
          "https://assetscdn1.paytm.com/images/cinema/Bachan-pandy_1035x420-2c3d7a00-a38f-11ec-942f-1d05071e0cf9.jpg",
        name: "BACHCHHAN PAANDEY",
        release_date: "2022",
        rating: "9",
      },
      {
        image_url:
          "https://i.ytimg.com/vi/mu29scuty1k/maxresdefault.jpg",
        name: "THE REAL DON2 RETURNS",
        release_date: "2016 ",
        rating: "10",
      },
      {
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yQK7P51RF6m1WcL91v77izVwPLvA4UWCKg&usqp=CAU",
        name: "CHHORI",
        release_date: "2018",
        rating: "9",
      },
      {
        image_url:
          "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/01/The-Best-Movie-Franchises-To-Binge-Watch.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5",
        name: "Avengers",
        release_date: "2018",
        rating: "4",
      },
]


localStorage.setItem("movies",JSON.stringify(obj2));

var movie=JSON.parse(localStorage.getItem("movies")) || [];

movie.map(function(ele){
    var mainDiv=document.createElement("div");
  
    var image=document.createElement("img");
  image.src=ele.image_url;
  
    var name=document.createElement("p");
    name.innerText=ele.name;
    var release_date=document.createElement("p");
    release_date.innerText=ele.release_date;

    var rating=document.createElement("p");
    rating.innerText=ele.rating;
  
    mainDiv.append(image,name,release_date,rating);
    document.querySelector("#movies").append(mainDiv);
  });

  
//shorting
document.querySelector("#sort-lh").addEventListener("click",lowhigh);

function lowhigh(){
    obj2.sort(function(a,b){
        return a.rating-b.rating
    })
}


document.querySelector("#sort-hl").addEventListener("click",highlow);

function highlow(){
    obj2.sort(function(a,b){
        return b.rating-a.rating
    })
}
