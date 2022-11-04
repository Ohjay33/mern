// How to fetch API's. 
// this is the basic setup

fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => {
    return response.json();
})
.then(response => {
    console.log(response);

// }).catch(err=>{
//   console.log(err);
});