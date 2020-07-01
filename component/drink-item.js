class DrinkItem extends HTMLElement {
    set cock(cock) {
        this._cock = cock;
        this.render();
    }

    render() {
        this.innerHTML = `
        <h2>${this._cock.strDrink}</h2>
        <img class="drink-item-list" src="${this._cock.strDrinkThumb}" alt="Fan Art">
        <div class="drink-info">
            <p> <b>How To Make: </b> ${this._cock.strInstructions}</p>
            <h5> Category : ${this._cock.strCategory} </h5>
            <h6>  <mark style="background-color:rgb(247, 172, 74)">${this._cock.strAlcoholic}</mark> <h6>
        </div>`;
    }
}

customElements.define("drink-item", DrinkItem);