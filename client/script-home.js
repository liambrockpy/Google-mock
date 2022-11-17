const searchAllBtn = document.querySelector('#sbutton')
const searchLuckyBtn = document.querySelector('#lucky')
const searchTermMain = document.querySelector('#search')
const myForm = document.querySelector("form");

myForm.addEventListener("submit", getGoogleResults)
searchAllBtn.addEventListener('click', getGoogleResults)

function getGoogleResults(e) {
    e.preventDefault()
    searchTerm = searchTermMain.value
    window.location.href = `/client/search.html?search=${searchTerm}`;
}
