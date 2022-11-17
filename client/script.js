let index = 1;
const resultList = document.getElementById('googleResults');
resultList.innerHTML = "";

const fetchAsync = async (index) => {
    const dbFile = await fetch(`http://localhost:3000/random/${index}`)
    const googleData = await dbFile.json();
    console.log(googleData);
}

async function append(input) {
    let m;
    let n;
    if (input === 'canada') {
        m = 1;
        n = 9;
    } else if (input === 'newzealand') {
        m = 9;
        n = 17;
    } else if (input === 'unitedkingdom') {
        m = 17;
        n = 25;
    }
    for (let i = m; i < n; i++) {
        let dbCountry = await fetch(`http://localhost:3000/${i}`)
        let grabTheGoods = await dbCountry.json();
        console.log(grabTheGoods);
        // adding the div
        let div = document.createElement('div')
        div.className = `div${i}`
        resultList.appendChild(div)
        let makeitbreak = document.createElement('br')
        // adding the country 
        let li = document.createElement('li');
        li.textContent = grabTheGoods.country
        li.className = "country"
        div.appendChild(li);
        div.appendChild(makeitbreak)

        let li2 = document.createElement('a');
        li2.textContent = grabTheGoods.title;
        li2.className = "title"
        li2.href = grabTheGoods.url
        div.appendChild(li2);
        div.appendChild(makeitbreak)

        let li3 = document.createElement('li');
        li3.textContent = grabTheGoods.desc;
        console.log(grabTheGoods.desc);
        li3.className = "description"
        div.appendChild(li3);
        div.appendChild(makeitbreak)

    }
}

async function clear() {
    resultList.innerHTML = '';
}

const form = document.getElementById('searchform');
const btn1 = document.getElementById('submitButton1');
const btn2 = document.getElementById('submitButton2');
let searchCount = 0;
let randomCount = 0;

btn1.addEventListener('click', () => searchCount++)
btn2.addEventListener('click', () => randomCount++)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.value);
    const searchQuery = document.getElementById('search_bar').value

    // filters non-letters
    const filter = /[^A-Za-z]/g;
    const filteredQuery = searchQuery.replace(filter, '');

    // error alert
    const search = filteredQuery.toLowerCase()
    const match = (search === 'canada') || (search === 'newzealand') || (search === 'unitedkingdom');
    if (match && searchCount === 1) {
        append(search)
    } else if (match && randomCount === 1) {
        randomFetch(search)
    } else if (search === '' && randomCount === 1) {
        randomWebsite()
    } else {
        alert(`Search query for ${searchQuery} does not exist yet. Only "canada", "newzealand", or "unitedkingdom" instead.`)
    }

    clear()
    searchCount = 0
    randomCount = 0
})



const btn = document.getElementById('submitButton1');



// // searchBtn.addEventListener('click', getAllResults);
// // luckyBtn.addEventListener('click', getRandomResult)
// const myForm = document.querySelector("form");
// myForm.addEventListener("submit", getGoogleResults)

// const resultList = document.getElementById('googleResults');
// resultList.innerHTML = "";

// function getGoogleResults(e){
//     e.preventDefault();
//     // let h1 = document.getElementById("marvelname");
//     // let h2 = document.getElementById("director");

//     let usersearch =document.getElementById("search_bar").value;
//     let url = `http://localhost:3000/search?value=${usersearch}`;
//     fetch(url)
//     .then((response) => response.json())
//     .catch(data => console.log(data))
//     .then(data => {
//         console.log(data);
//         // h1.textContent=data.name;
//         // h2.textContent=data.director;
//         // h3.textContent=data.phase;
//         // h4.textContent=data.cast;
//         // let img = "img/" + data.id + ".jpeg";
//         // h5.setAttribute("src", img);
//         // h5.setAttribute("src", `$(data.name).jpeg`);
//     })
// }
