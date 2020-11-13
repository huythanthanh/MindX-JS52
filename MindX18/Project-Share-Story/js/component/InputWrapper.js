const $template = document.getElementById('input-wrapper-template');

class InputWrapper extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open' })
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$input = this.shadowRoot.getElementById('input-main');
        this.$error = this.shadowRoot.getElementById('input-error');
    }

    static get observedAttributes() {
        return ['label', 'type', 'error', 'value'];
    }

    attributesChangedCallback(attrName, oldValue, newValue) {
        switch (attrName) {
            case 'label':
                this.$input.placeholder = newValue;
                break;

            case 'type':
                this.$input.type = newValue;
                break;

            case 'error':
                this.$error.error = newValue;
                break;

            case 'value':
                this.$input.value = newValue;
                break;
        }
    }

    get value() {
        return this.$input.value;
    }

    set error(message) {
        this.setAttribute('error', message);
    }
}

window.customElements.define('input-wrapper', InputWrapper);