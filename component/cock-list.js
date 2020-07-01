import "./drink-item.js";

class CockList extends HTMLElement {
set cocks(cocks) {
    this._cocks = cocks;
    this.render();
}

renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
}

render() {
    this.innerHTML = "";
    this._cocks.forEach(cock => {
        const drinkItemElement = document.createElement("drink-item");
        drinkItemElement.cock = cock
        this.appendChild(drinkItemElement);
    })
}
}

customElements.define("cock-list", CockList);