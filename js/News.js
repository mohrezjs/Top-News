class News {
    constructor() {
        this.apiKey = "651e51978be344c2ac5b8b689a6b374e";
    }
    async queryApi(searchBox, country, category) {
        let url = "https://newsapi.org/v2/";
        if (country === "" && category === "") {
            url += "everything?";
        } else {
            url += "top-headlines?";
        }

        if (searchBox !== "") {
            url += `q=${searchBox}&`;
        }

        if (country !== "") {
            url += `country=${country}&`;
        }

        if (category !== "") {
            url += `category=${category}&`;
        }

        url += `apiKey=${this.apiKey}`;

        const newsResponse = await fetch(url);
        const news = await newsResponse.json();
        return {
            news,
        };
    }


}
