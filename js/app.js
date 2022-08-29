// Classes
const ui = new UI();
const newsApi = new News();

// Listeners
listeners();

function listeners() {
    document.querySelector("#submitBtn").addEventListener("click", search);
}

// Functions

function search(e) {
    e.preventDefault();
    const searchBox = document.querySelector("#news-name").value,
        country = document.querySelector("#country").value,
        category = document.querySelector("#category").value;

    if (searchBox !== "" || country !== "" || category !== "") {
        newsApi.queryApi(searchBox, country, category).then((news) => {
            let newsArray = news.news.articles
            if (newsArray.length > 0) {
                ui.showNews(newsArray);
            } else {
                ui.showAlert("There is no news with your filtering", "alert alert-danger mt-4 text-center");
                ui.removeAlert();
            }
        });
    } else {
        ui.showAlert("please enter at least one parameter", "alert alert-danger mt-4 text-center");
        ui.removeAlert();
    }
}
