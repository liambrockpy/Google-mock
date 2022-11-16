// searchBtn.addEventListener('click', getAllResults);
// luckyBtn.addEventListener('click', getRandomResult)
const myForm = document.querySelector("form");
myForm.addEventListener("submit", getGoogleResults)

const resultList = document.getElementById('googleResults');
resultList.innerHTML = "";

function getGoogleResults(e){
    e.preventDefault();
    let usersearch =document.getElementById("search_bar").value;
    let url = `http://localhost:3000/search?value=${usersearch}`;
    fetch(url)
    .then((response) => response.json())
    .catch(data => console.log(data))
    .then(data => {
        console.log(data);

        // console.log(data[10]);

        for(let i=0; i<11; i++){    
            let searchInfo = data;
            let searchtitle =  data.title;
            let searchlink =  data.link;
            let search =  data.metatags;
            let div = document.createElement('div')
            div.className = `div${i}`
            resultList.appendChild(div)
            let gap = document.createElement('br')
            let li = document.createElement('li');
            li.textContent = JSON.stringify(searchInfo[i]);
            li.className = "breadCrumb";
            div.appendChild(li); 

            
        }
        // document.getElementById("dogpic").setAttribute("src", dogurl);
        // h5.setAttribute("src", img);
        // h5.setAttribute("src", `$(data.name).jpeg`);
    })
}

