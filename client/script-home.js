const searchAllBtn = document.querySelector('#sbutton')
const searchLuckyBtn = document.querySelector('#lucky')
const searchTermMain = document.querySelector('#search')
const myForm = document.querySelector("form");

myForm.addEventListener("submit", getGoogleResults)
myForm.addEventListener("submit", getLucky);
searchAllBtn.addEventListener('click', getGoogleResults)
searchLuckyBtn.addEventListener('click', getLucky)

function getGoogleResults(e) {
    e.preventDefault();
    let searchTerm = searchTermMain.value;
    let miz = "C:/Users/Miz/Desktop/Kamkwamba/assignments/googleliam/Google-mock";
    window.location.href = `../client/search.html?search=${searchTerm}`;
}

//for random
// function getLucky(e){
//     e.preventDefault();
//     console.log("works");
//     const resultList = document.getElementById('lucky');
//     let url = `http://localhost:3000/random`;
//     fetch(url)
//     .then((response) => response.json())
//     .catch(data => console.log(data))
//     .then(data => {
//         // console.log(data.breadcrumb);
//         window.location.href = data.breadcrumb;
//     })
// }

//for specific random
function getLucky(e){
    e.preventDefault();
    let searchTerm = searchTermMain.value;
    console.log("works");
    const resultList = document.getElementById('lucky');
    let url = `http://localhost:3000/random/${searchTerm}`;
    fetch(url)
    .then((response) => response.json())
    .catch(data => console.log(data))
    .then(data => {
        window.location.href = data.breadcrumb;
    })
}