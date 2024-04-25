const accessKey = "Jfz4jzejTGpYzweYO6XpiqRQdt3HCEJWVAiu1TVYeUc";

const SearchForm = document.getElementById("seach-form");
const seachBox = document.getElementById("seach-box");
const seachResult = document.getElementById("seach-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = "";
let page = 1;

async function seachImages() {
    keyword = seachBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page === 1) {
        seachResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);

        seachResult.appendChild(imageLink);
    });
    showMoreBtn.style.display = "block";
}

SearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    seachImages();
});


showMoreBtn.addEventListener("click", () => {
    page++;
    seachImages();
});