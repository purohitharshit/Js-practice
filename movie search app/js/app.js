const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.getElementById("movie-box");

const getMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    showMovies(data);
}

getMovies(APIURL);

const showMovies = (data) =>{ 
    movieBox.innerHTML =  "";
    
    data.results.forEach((item)=>{
    let imagePath = item.backdrop_path === null ? "image/missing.png": IMGPATH + item.backdrop_path;
        const box = document.createElement("div");
        box.classList.add("box");

        box.innerHTML = `
        <div class="boxi">
                <img src="${imagePath}" alt="" class="image">

                <div class="overlay">
                <div class="rating-row"> 
                <h2>${item.title}</h2>
                <h2>${item.vote_average}</h2>
                </div>
                    
                    <h3>Overview</h3>
                    <p>${item.overview}</p>
                </div>
            </div>
        `

        movieBox.appendChild(box);
    })
}

document.getElementById("search").addEventListener(("keyup"), 
function searching(event){

    // console.log(event.target.value);
    if(event.target.value != ""){
        getMovies(SEARCHAPI + event.target.value);
    }
    else{
        getMovies(APIURL);
    }
}
)