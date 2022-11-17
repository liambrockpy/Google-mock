let index = 1;
const resultList = document.getElementById('googleResults');
resultList.innerHTML = "";

async function append(input) {
    let m;
    let n;
    if (input === 'canada') {
        m = 1;
        n = 11;
    } else if (input === 'newzealand') {
        m = 11;
        n = 21;
    } else if (input === 'unitedkingdom') {
        m = 21;
        n = 31;
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

// random button feature
const form = document.getElementById('searchform');
const btn1 = document.getElementById('submitButton1');
const btn2 = document.getElementById('submitButton2');

let didTheyCount = 0;
let randomCount = 0;

btn1.addEventListener('click', () => didTheyCount++)
btn2.addEventListener('click', () => randomCount++)

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target.value);
    const userInput = document.getElementById('searchbar').value;
    const filter = /[^A-Za-z]/g;
    const filteredQuery = userInput.replace(filter, '');
    const search = filteredQuery.toLowerCase()
    const match = (search === 'canada') || (search === 'newzealand') || (search === 'unitedkingdom');
    if (match && didTheyCount === 1) {
        append(search)
    } else if (match && randomCount === 1) {
        getAssociatedWebsite(search)
    } else if (search === '' && randomCount === 1) {
        getRandomWebsite()
    } else {
        alert(`Search query for ${userInput} does not exist yet. Only "canada", "newzealand", or "unitedkingdom" instead.`)
    }

    clear()
    didTheyCount = 0
    randomCount = 0
})

const searchTermMain2 = document.querySelector('#searchbar')

async function getAssociatedWebsite(search){
    let searchTerm = searchTermMain2.value;
    console.log("works");
    const resultList = document.getElementById('lucky');
    let url = `http://localhost:3000/random/${searchTerm}`;
    await fetch(url)
    .then((response) => response.json())
    .catch(data => console.log(data))
    .then(data => {
        // console.log(data.breadcrumb);
        window.location.href = data.breadcrumb;
    })
}

async function getRandomWebsite(){
    console.log("works");
    const resultList = document.getElementById('lucky');
    let url = `http://localhost:3000/random`;
    await fetch(url)
    .then((response) => response.json())
    .catch(data => console.log(data))
    .then(data => {
        // console.log(data.breadcrumb);
        window.location.href = data.breadcrumb;
    })
}
