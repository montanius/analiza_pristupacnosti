export class Musterija {
    constructor(musterija) {
        this.ime = musterija.ime;
        this.prezime = musterija.prezime;
        this.godine = musterija.godine;
        this.brojIznajmljenihKnjiga = musterija.brojIznajmljenihKnjiga;
        this.stanjeRacuna = musterija.stanjeRacuna;
        this.iznajmljeneKnjige = musterija.iznajmljeneKnjige;
    }
    iznajmiKnjigu(biblioteka, id) {
        const knjiga = biblioteka.knjige.find(knjiga => knjiga.id === id);
        if (knjiga && this.stanjeRacuna < knjiga.cijena) {
            console.log("Korisnik nema dovoljno  sredstava da plati iznajmljivanje  knjige.");
        }
        const knjigaIznajmljena = biblioteka.iznajmiKnjigu(id);
        if (knjiga && this.stanjeRacuna >= knjiga.cijena && knjigaIznajmljena) {
            this.brojIznajmljenihKnjiga += 1;
            this.stanjeRacuna -= knjiga.cijena;
            this.iznajmljeneKnjige.push(knjiga.id);
            console.log("provjera: ", this.iznajmljeneKnjige);
            console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ", this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna, "€");
        }
    }
    dopunaRacuna(iznos) {
        this.stanjeRacuna = this.stanjeRacuna += iznos;
        console.log("Račun je dopunjen sa", iznos, "€. Stanje na računu je:", this.stanjeRacuna, "€.");
    }
}
