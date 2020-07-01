class AppBar extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <div class="logo">
            <ul>
                <li><img src="./beer-5035627_960_720.png"/></li>
                <li><h4><font color="yellow">Cock</font><em><font color="white">Finder</font></em></h4></li>
            </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define("app-bar", AppBar);