let btn1 = document.getElementById("final-submit");
btn1.addEventListener('click',getapi);
async function getapi()
{
    let mov = document.getElementById("search-input").value;
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=edf5051f&t=${mov}`);
        let data = await res.json();

        console.log(data);
        addToHtml(data);
    }
    catch(e)
    {
         console.log('err:',e);
        
    }
}

getapi();

function addToHtml(d)
{
    document.getElementById("movie-poster").src = `${d.Poster}`;
    document.getElementById("movie-name").innerHTML = `Movie name : ${d.Title}`;
    document.getElementById("movie-genre").innerHTML = `Genre : ${d.Genre}`;
    document.getElementById("movie-plot").innerHTML = ` ${d.Plot}`;
    document.getElementById("movie-rating").innerHTML = `Imdb-rating : ${d.imdbRating}`;
    document.getElementById("movie-actors").innerHTML = `Startings : ${d.Actors}`;

    let rate = d.imdbRating;

    
    if (Number(rate) > 8.5) {
        document.getElementById("movie-passsss").style.display = "block";
    } else
    {
        document.getElementById("movie-passsss").style.display = "none";
    }

    if (d.Title == undefined) {
        document.getElementById("movie-poster").src = "https://media.giphy.com/media/wKva4V7stfBOU/giphy.gif";
        document.getElementById("movie-plot").innerHTML = "404 Movie Not found";
        document.getElementById("movie-name").style.display = "none";
        document.getElementById("movie-genre").style.display = "none";
        document.getElementById("movie-rating").style.display = "none";
        document.getElementById("movie-actors").style.display = "none";
    } else
    {

        document.getElementById("movie-name").style.display = "block";
        document.getElementById("movie-genre").style.display = "block";
        document.getElementById("movie-rating").style.display = "block";
        document.getElementById("movie-actors").style.display = "block";
        
    }
   
}

///////////// for search box animation ///////////////////////////
const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);
///////////// for search box animation ///////////////////////////

////////////////// OVERLAY DIV //////////////////////////


function on(e) {
    e.preventDefault();
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

////////////////// OVERLAY DIV //////////////////////////

////////////////// enter input //////////////////////////



////////////////// enter input //////////////////////////