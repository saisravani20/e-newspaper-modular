class Footer extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        const shadowRoot = this.attachShadow({mode : 'open'})
        shadowRoot.appendChild(footerTemplate.content)
    }
}



const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `
<link href="./styles.css" rel="stylesheet">
<footer>
    <button onclick = "prev()">Prev</button>
    <button onclick = "next()">Next</button>
</footer>`

customElements.define('footer-component',Footer)