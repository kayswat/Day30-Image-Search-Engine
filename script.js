const accessKey = '1mZiIqMEF3LSzTCe9uyeRISkg2Sp5ZHSiyTv3jk7QXI'

const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const ShowMoreImages = document.getElementById('show-more-btn');

let keyword = "";
let page = 1;


async function searchImages(){
    keyword = searchBox.value;
    //const url = 'https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}';
     const url = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=1mZiIqMEF3LSzTCe9uyeRISkg2Sp5ZHSiyTv3jk7QXI"

    // https://api.unsplash.com/search/photos?page=1&query=office&client_id=1mZiIqMEF3LSzTCe9uyeRISkg2Sp5ZHSiyTv3jk7QXI
console.log(keyword)
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");;
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
   
}

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})