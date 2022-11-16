const data = require('./data');

class CountrySearch {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.url = data.url;
        this.breadcrumb = data.breadcrumb;
        this.description = data.description;
    }

    static get all() {
        const searches = data.map((search) => new CountrySearch(search))
        return searches;
    }

    static findById(id){
        const sData = data.filter((search) => search.id == id)[0];
        if (!sData){
            return;
        }
        const search = new CountrySearch(sData);
        return search;
    }

}

module.exports = CountrySearch;
