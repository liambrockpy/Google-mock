// searchBtn.addEventListener('click', getAllResults);
// luckyBtn.addEventListener('click', getRandomResult)
const myForm = document.querySelector("form");
//// myForm.addEventListener("click", getGoogleResults)
const searchButton = document.querySelector('#sbutton')
const luckyButton = document.querySelector('#lucky')

searchButton.addEventListener('click', getGoogleResults)

const resultList = document.getElementById('googleResults');
resultList.innerHTML = "";

function getGoogleResults(e) {
    e.preventDefault();
    // let h1 = document.getElementById("marvelname");
    // let h2 = document.getElementById("director");

    let userSearch = document.getElementById("search").value;
    if (!userSearch) return //ignore empty strings
    let url = `http://localhost:3000/search?value=${userSearch}`;
    fetch(url)
        .then((response) => response.json())
        .catch(data => console.log(data))
        .then(data => {
            console.log(data);
            if (data.error) {
                // ! handle error messages from google api
                resultList.textContent = data.error.message
            } else {
                // h1.textContent=data.name;
                // h2.textContent=data.director;
                // h3.textContent=data.phase;
                // h4.textContent=data.cast;
                // let img = "img/" + data.id + ".jpeg";
                // h5.setAttribute("src", img);
                // h5.setAttribute("src", `$(data.name).jpeg`);
            }
        })
}

