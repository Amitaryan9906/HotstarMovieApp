// slideshow 

function slideShow(){
const arr=['https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-08-26/SetRD2_Desk_D_E_3P-0a430040-3f42-4958-85a6-81dc7576841e.jpg','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4886/1334886-h-1f45136cfdbe','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6833/1306833-h-56cd8c036e0b','https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/905/840905-h','https://shifu.hotstarext.com/SOURCE/VOD/cd-2022-08-26/SetRD2_Desk_D_E_3P-0a430040-3f42-4958-85a6-81dc7576841e.jpg']

let i=0;
let div=document.getElementById("slide");
let img=document.createElement("img");
img.src=arr[0];
div.append(img);
i++;

setInterval(function(){
    if(i==3){
        i=0;
    }
    img.src=arr[i];
    i++;
    div.append(img);
},3000)
}
slideShow();


// For fetch data from API 

async function searchMovies(){
// collection of movies 
//  from OMDb API

    let query=document.getElementById("movie").value;
console.log("query:",query);


let res= await fetch(`http://www.omdbapi.com/?apikey=f3d5c71f&s=${query}`);
let data= await res.json();
appendMovies(data.Search)
console.log(data.Search)
}

searchMovies();
let id;
function debouncing(func,delay) {
if(id){
    clearTimeout(id)
}
id=setTimeout(function(){
    func();
},delay);
}

// Append movies
   let loader=document.createElement("img");
    loader.src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"

function appendMovies(data){
 loader.style.display="none";

let data_div=document.getElementById("movies");
data_div.innerHTML=null;
data_div.id="movies"

data_div.append(loader);
data.forEach(function(ele){
    let box=document.createElement("div");
           
    let img=document.createElement("img");
    img.src=`${ele.Poster}`;
    img.id="img";

    let p_name=document.createElement("p");
    p_name.innerHTML=`Name ${ele.Title}`;

    let p_rating=document.createElement("p");
    p_rating.innerHTML=`Rating ${ele.Year}`;

    box.append(img,p_name,p_rating);
    data_div.append(box);
});
}