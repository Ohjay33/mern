import React from "react";


const FetchSports = ()=>{

    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {
        return response.json();
    })
    .then(response => {
        console.log(response);
    
    // }).catch(err=>{
    //   console.log(err);
    });



    return(
        <div>
            <button>Click me to fetch Sports</button>
        </div>
    )
}

export default FetchSports;