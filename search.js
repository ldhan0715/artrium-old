const searchForm = document.querySelector("#search");
const searchInput = searchForm.querySelector("input");

function handleSearch(event) {
    event.preventDefault();
    var query = searchInput.value;
    if (query[0] === "/") {
        query = query.replace("/", "");
        location.href = `http://${query}`;
    } else {
        query = query.replace(/ /g, "%20");
        location.href = `https://www.google.com/search?q=${query}`;
    }
}

function init() {
    searchForm.addEventListener("submit", handleSearch);
}

init();