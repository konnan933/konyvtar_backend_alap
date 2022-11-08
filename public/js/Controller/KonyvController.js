import KonyvekView from "../View/public/konyvPublicView.js";
import PublicKonyvek from "../View/public/konyvekPublicView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        this.token = $('meta[name="csrf-token"]').attr("content");
        const konyvmodel = new KonyvModel(this.token);
        this.vegpont = "konyvek";
        konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
        $(window).on("torol", (event) => {
            konyvmodel.onTorles(this.vegpont, event.detail.id);
            konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
        });
        $(window).on("modosit", (event) => {
            event.detail.cim += "x";
            konyvmodel.onModositas(this.vegpont, event.detail);
            konyvmodel.adatBe(this.vegpont, this.konyvAdatok);
        });
    }

    konyvAdatok(tomb) {
        let szuloelem = $("main");
        new KonyvekView(tomb, szuloelem);
        new PublicKonyvek(tomb, $(".kartyak"));
    }
}

export default KonyvController;
