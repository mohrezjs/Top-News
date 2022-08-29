class UI {
    constructor() {
        this.result = document.querySelector("#result");
    }
    showAlert(message, className) {
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(message)),
            (div.className = className),
            document.querySelector("#alert").appendChild(div);
    }

    removeAlert() {
        const alert = document.querySelector("#alert");
        setTimeout(() => {
            alert.lastChild.remove();
        }, 3000);
    }

    showNews(news) {
        news.forEach((news) => {
            this.result.innerHTML += `
                <div class='col-md-4 mb-4'>
                    <div class = 'card'>
                        <img src=${news.urlToImage} class="card-img-top" alt="${news.title}" style='height:250px'>
                        <div class="card-body">
                            <h3 class="card-title">${news.title.split("-", 1)}</h3>
                            <p class="card-text lead text-info">${news.description}</p>
                            <span class="badge badge-primary">source : ${news.source.name} </span>
                            <span class="badge badge-primary">Date & time : ${news.publishedAt}</span>
                            <a href=${news.url} target="_blank" class="btn btn-primary btn-block mt-3">See more</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }
}
