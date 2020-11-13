import { checkInputWrapper, validateEmail, validateStrongPassword } from "../utils.js"
import "./InputWrapper.js"
const $template = document.getElementById('register-form-template')

class RegisterForm extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:'open'})
        this.shadowRoot.appendChild($template.content.cloneNode(true))

        this.$registerForm = this.shadowRoot.getElementById('register-form')

        console.log(this);

        this.$name = this.shadowRoot.getElementById("name")
        this.$email = this.shadowRoot.getElementById("email")
        this.$pass = this.shadowRoot.getElementById("pass")
    }

    //khi register-form đc thêm vào DOM Tree thì gọi phương thức này
    connectedCallback() {
        this.$registerForm.onsubmit = (event) => {
            let name = this.$name.value
            let email = this.$email.value
            let pass = this.$pass.value
            let passConfirm = this.$passConfirm.value

            let isPassed = checkInputWrapperValue(this.$name, function(value) {
                console.log(value);
                return value == "";
            }, "Nhap vao ten") & checkInputWrapperValue(this.$email, function(value) {
                return value == "" || !validateEmail(value);
            }, "Nhap vao email") & checkInputWrapperValue(this.$pass, function(value) {
                return value == "" || !validateStrongPassword(value);
            }, "Mat khau khong hop le") & checkInputWrapperValue(this.$passConfirm, function(value) {
                return value == "" || value != pass;
            }, "Xac nhan mat khau sai");

            event.preventDefault();

            //Kiem tra tong the
            console.log(isPassed);
        }
    }
}

window.customElements.define('register-form',RegisterForm)