export default class QuoteGetter {
    constructor(authorId, quotesId) {
        this.authorId = authorId;
        this.quotesId = quotesId;
        this.quotes = []
        this.quoteAuthors = [];
        this.init();
    }

    async init() {
        this.quotes = await this.getQuotes();
        console.log(this.quotes);
        this.quoteAuthors = this.extractAuthors();
        console.log(this.quoteAuthors);
        this.buildAuthorSelect();

    }

    async getQuotes() {
        const response = await fetch("https://type.fit/api/quotes")
        const data = await response.json();
        return data
    }

    extractAuthors() {
        const authors = new Set(this.quotes.map(quote => quote.author));
        return[...authors]
    }

    buildAuthorSelect() {
        const element = document.getElementById(this.authorId);
        const authorHtml = this.quoteAuthors.map(author => `<option value= "${author}">${author}</option>`);
        element.innerHTML = authorHtml.join("");
    }

    filterByAuthor(author) {
        const filtered = this.quotes.filter(quote => quote.author == author);
        console.log(filtered);
        this.rendeQuotes(filtered);
    }

    rendeQuotes(quotes) {
        const element = document.getElementById(this.quotesId);
        element.innerHTML = quotes.map((quote) => {
            let icon = 1;
            let position = 1;
            return `<li class='icon${icon} position${position}'> ${quote.text}</li>`;
        }).join('');
    }
} 