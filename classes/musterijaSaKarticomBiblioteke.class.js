import { Musterija } from "./Musterija.class";
export class MusterijaSaKarticomBiblioteke extends Musterija {
    constructor(musterija, popust) {
        super(musterija);
        this.popust = popust;
    }
    iznajmiKnjigu(biblioteka, id) {
        const knjiga = biblioteka.knjige.find(knjiga => knjiga.id === id);
        if (knjiga) {
            const cijenaSaPopustom = knjiga.cijena * this.popust;
            if (knjiga && this.stanjeRacuna < cijenaSaPopustom) {
                console.log("Korisnik nema dovoljno  sredstava da plati iznajmljivanje  knjige.");
                return false;
            }
            const knjigaIznajmljena = biblioteka.iznajmiKnjigu(id);
            if (knjiga && this.stanjeRacuna >= cijenaSaPopustom && knjigaIznajmljena) {
                this.brojIznajmljenihKnjiga += 1;
                this.stanjeRacuna -= cijenaSaPopustom;
                this.iznajmljeneKnjige.push(knjiga.id);
                console.log("provjera: ", this.iznajmljeneKnjige);
                console.log("Cijena iznajmljivanja knjige je:", cijenaSaPopustom, "€. \n");
                console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ", this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna, "€");
            }
        }
    }
    vratiKnjigu(biblioteka, id) {
        const index = this.iznajmljeneKnjige.indexOf(id);
        if (index === -1) {
            console.log(this.ime, " nije iznajmio ovu knjigu.");
        }
        else {
            biblioteka.vratiKnjigu(id);
            this.brojIznajmljenihKnjiga -= 1;
            console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ", this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna, "€");
        }
    }
    dopunaRacuna(iznos) {
        this.stanjeRacuna = this.stanjeRacuna += iznos;
        console.log("Račun je dopunjen sa", iznos, "€. Stanje na računu je:", this.stanjeRacuna, "€.");
    }
}
