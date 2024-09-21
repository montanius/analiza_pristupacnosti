export class Musterija {
    get ime() {
        return this._ime;
    }
    get prezime() {
        return this._prezime;
    }
    get godine() {
        return this._godine;
    }
    get brojIznajmljenihKnjiga() {
        return this._brojIznajmljenihKnjiga;
    }
    set brojIznajmljenihKnjiga(uvecanje) {
        this._brojIznajmljenihKnjiga = uvecanje;
    }
    get stanjeRacuna() {
        return this._stanjeRacuna;
    }
    set stanjeRacuna(novoStanje) {
        this._stanjeRacuna = novoStanje;
    }
    get iznajmljeneKnjige() {
        return this._iznajmljeneKnjige;
    }
    constructor(musterija) {
        this._ime = musterija.ime;
        this._prezime = musterija.prezime;
        this._godine = musterija.godine;
        this._brojIznajmljenihKnjiga = musterija.brojIznajmljenihKnjiga;
        this._stanjeRacuna = musterija.stanjeRacuna;
        this._iznajmljeneKnjige = musterija.iznajmljeneKnjige;
    }
    iznajmiKnjigu(biblioteka, id) {
        const knjiga = biblioteka.knjige.find(knjiga => knjiga.id === id);
        if (knjiga && this.stanjeRacuna < knjiga.cijena) {
            console.log("Korisnik nema dovoljno  sredstava da plati iznajmljivanje  knjige.");
        }
        const knjigaIznajmljena = biblioteka.iznajmiKnjigu(id);
        if (knjiga && this.stanjeRacuna >= knjiga.cijena && knjigaIznajmljena) {
            this.iznajmljeneKnjige.push(knjiga.id);
            this.brojIznajmljenihKnjiga += 1;
            this.stanjeRacuna = this.stanjeRacuna - knjiga.cijena;
            console.log("provjera: ", this.iznajmljeneKnjige);
            console.log(this.iznajmljeneKnjige.length);
            console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ", this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna, "€");
        }
    }
    dopunaRacuna(iznos) {
        this.stanjeRacuna = this.stanjeRacuna += iznos;
        console.log("Račun je dopunjen sa", iznos, "€. Stanje na računu je:", this.stanjeRacuna, "€.");
    }
}
