async function getapi()
{
    let mov = document.getElementById("name").value;
    try {
        let res = await fetch(`http://www.omdbapi.com/?${mov}&apikey=edf5051f`);
        let data = await res.json();

        console.log(data);
    }
    catch(e) {
        console.log('err:',e);
    }
    
}

getapi();