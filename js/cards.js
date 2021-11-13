async function getApi(){
    try{
    return await fetch(`https://moviesmern.herokuapp.com/movies/all`)
    .then((res)=>res.json())
    .then((res)=>res.data)
}
catch(err){
return err
}
}
async function getName(name){
    try{
    return await fetch(`https://moviesmern.herokuapp.com/movies/movie/searchByName/`+name)
    .then((res)=>res.json())
    .then((res)=>res.data)
}
catch(err){
return err
}
}
async function getMovie(api,options){
    try{
    return await fetch(api,options)
    .then((res)=>res.json())
    .then((res)=>res.data)
}
catch(err){
return err
}
}
getApi()
.then((rej)=>console.log(rej))

function printAllObjects(arrayOfObj) {
    showOnScreen.innerHTML =``
    for (let item of arrayOfObj) {
    
        showOnScreen.innerHTML += `<section class="cardMovies">
        <article><img src="${item.image}"></article>              
            <article>${item.movieName}</article>
            <article>${item.rating}</article>
            <button onclick=deleteMovie("${item._id}")>delete</button>
            <section>`
        
    }
}
getApi()
.then((res)=>(printAllObjects(res)))



function deleteMovie(id){
    confirm("are you sure you want to delete ")
let options={
    method:`DELETE`

}
getMovie(`https://moviesmern.herokuapp.com/movies/movie/${id}`,options)
.then(res=>console.log(res))
.then(alert("movie was deleted"))
if(alert){
    location.reload()
}
}
searchBtn.onclick=()=>{
    getName(searchInput.value)
    .then(res=>{printAllObjects(res)})
}