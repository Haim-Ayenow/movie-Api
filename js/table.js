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
getApi()
.then((rej)=>console.log(rej))



function printAllObjects(arrayOfObj) {
    
    for (let item of arrayOfObj) {
    
        cardsTable.innerHTML += 
            `<tr class="tableContent">
            <td>${item._id}</td>
            <td>${item.movieName}</td>
            <td>${item.date}</td>
            <td>${item.linkToMovie}</td>
            <td>${item.rating}</td>
            <td>${item.synopsis}</td>
            <td>${item.image}</td>
            </tr>`

    }
}
getApi()
.then((res)=>(printAllObjects(res)))
