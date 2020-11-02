const $template = document.getElementById('meme-container-template')

// Tao shadowDOM
class MemeContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); //Tao / gan shadowDOM
        this.shadowRoot.appendChild($template.content.cloneNode(true));
    }

    // Duoc goi khi component dc sinh ra
    connectedCallback() {
        console.log("Huy Huy Huy Huy");
    }

    // Duoc goi khi thuoc tinh cua component duoc thay doi
    attributeChangedCallback(name, oldValue, newValue) {

    }

    // Duoc goi khi component mat di
    disconnectedCallback() {
        console.log("Huy 1 2 3 4");
    }
}

// Custom-element.
window.customElements.define('meme-container', MemeContainer);