export default class Document {
    id;
    name;
    author;
    price;
    publishDate;

    constructor(name, author, price, publishDate) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.publishDate = publishDate;
        this.id = uuid.v4();
    }

    get info () {
        return `
        Id: ${this.id},
        Name: ${this.name}
        Price: ${this.price}
        Author: ${this.author}
        PublishDate: ${this.publishDate}

        `;
    }

    set info (data) {
        this.name = data.name;
        this.author = data.author;
        this.price = data.price;
        this.publishDate = data.publishDate;
    }
}