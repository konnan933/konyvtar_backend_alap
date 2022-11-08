class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        this.token = token;
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.#konyvekTomb = data;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    adatPost(vegpont, data) {
        fetch(vegpont, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: data,
        })
            .then((response) => response.json())
            .then()
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    onTorles(vegpont, id) {
        fetch(`${vegpont}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then((response) => response.json())
            .then(() => {
                console.log("Sikeres Törlés!");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }

    onModositas(vegpont, adat) {
        fetch(`${vegpont}/${adat.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then(() => {
                console.log("Sikeres modositas!");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}

export default KonyvModel;
