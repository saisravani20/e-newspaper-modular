const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `

<link href="./styles.css" rel="stylesheet">
<header>
    <div class="header-row-1">
        <h1>THE ECONOMIC TIMES</h1>
    </div>        
    <div class="header-row-2">
        <h3>VOL NO 51 NO 26 | NEW DELHI /GURGOAN</h3>
        <h3>BENNET,COLEMAN & CO.LTD.</h3>
        <h3>MONDAY, 6 FEBRUARY 2023</h3>
    </div>
</header>`

class Header extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        const shadowRoot = this.attachShadow({mode:'open'})
        shadowRoot.appendChild(headerTemplate.content)
    }
}

customElements.define('header-component',Header)