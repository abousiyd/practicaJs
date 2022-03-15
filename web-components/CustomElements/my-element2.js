class myElement extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode:"open"})
    }

    getTemplate() {
        const template = document.createElement('template');
        template.innerHTML = `
            <section> 
                <h2> Soy h2 del my-element2 </h2>
                <div>
                    <p> Hola desgraciao escribe algo mejor</p>
                </div>
            </section>
            `
        return template
    }

    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}

customElements.define("my-element2", myElement)