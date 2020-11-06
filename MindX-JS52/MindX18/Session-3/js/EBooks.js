import Document from "./Document.js";

export default class EBooks extends Document {
    discount;
    constructor(name, author, price, publishDate, discount) {
        super(name, author, price, publishDate, discount);
        this.discount = discount;
    }

    get info() {
        return `
        Id: ${this.id},
        Name: ${this.name}
        Price: ${this.price * (100 - this.discount) / 100}
        Author: ${this.author}
        PublishDate: ${this.publishDate}
        Discount: ${this.discount}
        `;
    }
}