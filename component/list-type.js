class ListType extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div id="content">
        <article class="one card">
            <h3> Sour </h3>
                <img class="featured-image" src="./sour.jpg"/>
                <p>
                    Jenis cocktail yang termasuk dalam kategori sour (asam) adalah cocktail yang berbasis campuran jeruk konsentrat,
                    perasan jeruk segar untuk mendapatkan aroma alaminya yang tajam dan segar.
                    Untuk mendapatkan rasa manisnya biasanya ditambahkan sirup tetapi aroma sirup tidak boleh mendominasi aroma jeruk segarnya.
                </p>
        </article>
        <article class="two card">
            <h3> Fizz atau Collins </h3>
            <img class="featured-image" src="./fizz.jpg"/>
            <p>
                Fizz atau Collins adalah jenis cocktail yang 
                mengandung minuman soda dan biasanya disajikan 
                di gelas panjang yang di campur dengan es segar dan 
                jeruk nipis atau lemon sebagai pelengkapnya.
            </p>
        </article> 
        <article class="three card">
            <h3> Stirred </h3>
            <img class="featured-image" src="./stirred.jpg"/>
            <p>
                Stirred cocktails atau biasa disebut Old-fashioned adalah cocktail 
                klasik yang berbasis alkohol konsentrat tinggi yang 
                beraroma seperti whisky dicampur alkohol pahit tanpa aroma dan ditambah 
                pemanis seperti gula atau sirup buah.  Cocktail ini biasanya di sajikan 
                dengan es segar dalam gelas yang pendek. 
            </p>
        </article> 
        <article class="four card">
            <h3> Three-parters </h3>
            <img class="featured-image" src="./three parters.jpg"/>
            <p>
                Three-parters cocktail adalah campuran 3 jenis alkohol konsentrat medium atau rendah seperti 
                Vermouth di tambah pemanis seperti sirup.  Cocktail ini di sajikan dalam 
                keadaan dingin dengan gelas segitiga panjang. 
            </p>
        </article> 
    </div>
        `;
    }
}

customElements.define("list-type", ListType);