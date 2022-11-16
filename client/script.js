// searchBtn.addEventListener('click', getAllResults);
// luckyBtn.addEventListener('click', getRandomResult)
const myForm = document.querySelector("form");
myForm.addEventListener("submit", getGoogleResults)

const resultList = document.getElementById('googleResults');
resultList.innerHTML = "";

function getGoogleResults(e){
    e.preventDefault();
    // let h1 = document.getElementById("marvelname");
    // let h2 = document.getElementById("director");

    let usersearch =document.getElementById("search_bar").value;
    let url = `http://localhost:3000/search?value=${usersearch}`;
    fetch(url)
    .then((response) => response.json())
    .catch(data => console.log(data))
    .then(data => {
        console.log(data);
        // h1.textContent=data.name;
        // h2.textContent=data.director;
        // h3.textContent=data.phase;
        // h4.textContent=data.cast;
        // let img = "img/" + data.id + ".jpeg";
        // h5.setAttribute("src", img);
        // h5.setAttribute("src", `$(data.name).jpeg`);
    })
}

