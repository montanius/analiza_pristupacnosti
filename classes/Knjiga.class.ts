import { SvojstvaKnjige } from "../interfaces/svojstvaKnjige.interface";

export class Knjiga {
        id : number;
    autor : string;
        naslov : string;
    godinaIzdanja : number;
        cijena : number;
        kolicina : number;
            constructor(svojstvaKnjige:SvojstvaKnjige){
                this.id = svojstvaKnjige.id;
                this.autor = svojstvaKnjige.autor;
                this.naslov = svojstvaKnjige.naslov;
this.godinaIzdanja = svojstvaKnjige.godinaIzdanja;
this.cijena = svojstvaKnjige.cijena;
this.kolicina = svojstvaKnjige.kolicina;

    }
    prikaziKnjigu(){
console.log(this.id, "\n", this.autor, "\n", this.naslov, "\n", this.godinaIzdanja, "\n", this.cijena, "\n", this.kolicina);
}
}

