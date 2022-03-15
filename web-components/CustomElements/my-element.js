const template = document.createElement('div');
template.innerHTML = `
<style> 
    div {background-color: #eee}
    .text {color: red}
    .text2 {color: #848488}
</style>


<p class="text"> te quiero lorem ipsum </p>
<p class="text2"> buenas noches lorem ipsum </p>
`

class myElement extends HTMLElement {
    constructor() {
        super()

        this.p = document.createElement("p")
    }

    connectedCallback() {
        this.p.textContent = "lorem ipsum fo9 chwaya";
        this.appendChild(this.p)
        this.appendChild(template)
    }
}

customElements.define("my-element", myElement)