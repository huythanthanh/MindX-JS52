const $template = document.querySelector("template")

// Tao shadowDOM
class MemeContainer extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'}); //Tao / gan shadowDOM
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    // Duoc goi khi component dc sinh ra
    connectedCallback() {
        console.log("abc");
    }

    // Duoc goi khi thuoc tinh cua component duoc thay doi
    attributeChangedCallback(Name, oldValue, newValue) {
        console.log(Name, newValue);
        if(Name == 'name') {
            this.shadowRoot.querySelector('.meme-name').innerHTML = newValue
        }
        if(Name == 'price') {
            this.shadowRoot.querySelector('.meme-price').innerHTML = newValue
        }
        if(Name == 'photo') {
            this.shadowRoot.querySelector('.meme-photo').src = newValue
        }
        if(Name == 'category') {
            this.shadowRoot.querySelector('.meme-categories').innerHTML = newValue
        }
        if(Name == 'chapters') {
            this.shadowRoot.querySelector('.meme-chapters').innerHTML = newValue
        }
    }

    // Duoc goi khi component mat di
    disconnectedCallback() {
        console.log("abc 1234");
    }

    static get observedAttributes() {
        return ['photo', 'category', 'name', 'chapters', 'price']
    }
}

window.customElements.define('meme-container', MemeContainer);