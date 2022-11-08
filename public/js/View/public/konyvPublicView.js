// egy könyv

class publicKonyv {
    constructor(data, szuloElem) {
        this.data = data;
        szuloElem.html("");
        szuloElem.append(`
    <div class="kartya columns-1 rounded-lg rounded-lg">
        <h2>${data.cim}</h2>
        <p>${data.szerzo}</p>
        <p>${data.ar}</p>
        <div>
        <button id=${data.id}>Kosárba</button>
        <button id=${data.id + "m"}>Modosit</button>
        <button id=${data.id + "t"}>Törlés</button>
        </div>
    </div>`);

        this.kosarGombElem = $(`#${this.data.id}`);
        this.torlesId = $(`#${this.data.id + "t"}`);
        this.modositId = $(`#${this.data.id + "m"}`);

        this.kosarGombElem.on("click", () => {
            this.kattintasTrigger("kosarba");
        });
        this.torlesId.on("click", () => {
            this.kattintasTrigger("torol");
        });
        this.modositId.on("click", () => {
            this.kattintasTrigger("modosit");
        });
    }
    kattintasTrigger(esemenyNev) {
        const esemeny = new CustomEvent(esemenyNev, { detail: this.data });
        window.dispatchEvent(esemeny);
    }
}
export default publicKonyv;
