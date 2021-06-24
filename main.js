async function getapi()
{
    let mov = document.getElementById("name").value;
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=edf5051f&t=${mov}`);
        
        let data = await res.json();

        console.log(data);
        showmovie(data);
    }
    catch(e) {
        console.log('err:',e);
    }
    
}

getapi();

function showmovie(d) 
{
    let movie = document.getElementById("movie-conatin");
    let div= document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = `title of movie: ${d.Title}`;

    let pic=document.createElement("img");
    pic.src = `${d.Poster}`;

    let plot = document.createElement("p");
    plot.innerHTML = `plot of movie: ${d.Plot}`;

    let rating = document.createElement("p");
    rating.innerHTML = `rating of movie: ${d.imdbRating}`;

    let actor = document.createElement("p");
    actor.innerHTML = `actor of movie: ${d.Actors}`;

    if (d.Title != undefined )
    {
         div.append(name,pic,plot,rating,actor);
        movie.appendChild(div);
    }
    
   
}