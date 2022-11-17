// const myForm = document.querySelector("form");
// myForm.addEventListener("submit", getLucky)

// // const fetchAsync = async (index) => {
// //     const dbFile = await fetch(`http://localhost:3000/random/${index}`)
// //     const googleData = await dbFile.json();
// //     console.log(googleData);
// // }

// function getLucky(e){
//     e.preventDefault();
//     const resultList = document.getElementById('lucky');
//     let url = `http://localhost:3000/random`;
//     fetch(url)
//     .then((response) => response.json())
//     .catch(data => console.log(data))
//     .then(data => {
//         console.log(data.breadcrumb)
//     })
// }