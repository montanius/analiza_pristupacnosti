type SvojstvaKnjige = {
    id : number;
    autor : string;
    naslov : string;
godinaIzdanja : number;
    cijena : number;
    kolicina : number;
}

interface Musterija {
ime : string,
prezime : string,
godine : number,
brojIznajmljenihKnjiga : number,
stanjeRacuna : number,
iznajmljeneKnjige : number[]
}

class MusterijaSaKarticomBiblioteke implements Musterija {
    ime : string;
    prezime : string;
    godine : number;
    brojIznajmljenihKnjiga : number;
    stanjeRacuna : number;
    iznajmljeneKnjige: number[];
    popust : number;

    constructor (musterija:Musterija, popust : number){
this.ime = musterija.ime;
this.prezime = musterija.prezime;
this.godine = musterija.godine;
this.brojIznajmljenihKnjiga = musterija.brojIznajmljenihKnjiga;
this.stanjeRacuna = musterija.stanjeRacuna;
this.iznajmljeneKnjige = musterija.iznajmljeneKnjige;
this.popust = popust;
}

iznajmiKnjigu (biblioteka:Biblioteka, id:number){
        const knjiga = biblioteka.knjige.find(knjiga => knjiga.id === id);

        if(knjiga){
            const cijenaSaPopustom = knjiga.cijena * this.popust ;

        if(knjiga && this.stanjeRacuna < cijenaSaPopustom){
            console.log("Korisnik nema dovoljno  sredstava da plati iznajmljivanje  knjige.");
            return false;
            }

            const knjigaIznajmljena = biblioteka.iznajmiKnjigu(id);
            
            if(knjiga && this.stanjeRacuna >= cijenaSaPopustom && knjigaIznajmljena){
        this.brojIznajmljenihKnjiga += 1;
    this.stanjeRacuna -= cijenaSaPopustom;
    this.iznajmljeneKnjige.push(knjiga.id);
console.log("provjera: ", this.iznajmljeneKnjige);
    console.log("Cijena iznajmljivanja knjige je:", cijenaSaPopustom, "€. \n");
    console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ",this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna,"€");
}
}
}

vratiKnjigu (biblioteka:Biblioteka, id:number){
const index = this.iznajmljeneKnjige.indexOf(id);

if(index === -1){
console.log(this.ime, " nije iznajmio ovu knjigu.");
}
else{
biblioteka.vratiKnjigu(id);
this.brojIznajmljenihKnjiga -= 1;
console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ",this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna,"€");
}
}

dopunaRacuna(iznos:number){
this.stanjeRacuna = this.stanjeRacuna += iznos;
console.log("Račun je dopunjen sa", iznos, "€. Stanje na računu je:", this.stanjeRacuna, "€.");
}
}
class NovaMusterija implements Musterija {
    ime : string;
    prezime : string;
    godine : number;
    brojIznajmljenihKnjiga : number;
    stanjeRacuna : number;
    iznajmljeneKnjige: number[];

    constructor (musterija:Musterija){
this.ime = musterija.ime;
this.prezime = musterija.prezime;
this.godine = musterija.godine;
this.brojIznajmljenihKnjiga = musterija.brojIznajmljenihKnjiga;
this.stanjeRacuna = musterija.stanjeRacuna;
this.iznajmljeneKnjige = musterija.iznajmljeneKnjige;
}

iznajmiKnjigu (biblioteka:Biblioteka, id:number){
    const knjiga = biblioteka.knjige.find(knjiga => knjiga.id === id);
 
if(knjiga && this.stanjeRacuna < knjiga.cijena){
            console.log("Korisnik nema dovoljno  sredstava da plati iznajmljivanje  knjige.");
            }

const knjigaIznajmljena = biblioteka.iznajmiKnjigu(id);
            
if(knjiga && this.stanjeRacuna >= knjiga.cijena && knjigaIznajmljena){
        this.brojIznajmljenihKnjiga += 1;
    this.stanjeRacuna -= knjiga.cijena;
    this.iznajmljeneKnjige.push(knjiga.id);
    console.log("provjera: ", this.iznajmljeneKnjige);
    console.log("Broj knjiga koje je", this.ime, this.prezime, " iznajmio: ",this.brojIznajmljenihKnjiga, "\n", "Preostali iznos na računu je ", this.stanjeRacuna,"€");
}}            
dopunaRacuna(iznos:number){
this.stanjeRacuna = this.stanjeRacuna += iznos;
console.log("Račun je dopunjen sa", iznos, "€. Stanje na računu je:", this.stanjeRacuna, "€.");

}
}
class Knjiga {
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

class Biblioteka {
knjige : Knjiga[];
    constructor(){
this.knjige = [];
}

prikaziKnjige(){
console.log(this.knjige);
}

dodajKnjige(knjiga:Knjiga){
this.knjige.push(knjiga);
console.log("Knjiga", knjiga.naslov, "je dodata u biblioteku. Broj dodatih primjeraka je", knjiga.kolicina);
}

izbaciKnjigu(knjiga : Knjiga){
const index = this.knjige.indexOf(knjiga);
if(index !== -1){
    this.knjige.splice(index, 1);
console.log("Svi primjerci knjige", knjiga.naslov," su izbačeni iz biblioteke.");
}
else{
console.log("Knjiga", knjiga.naslov, "ne postoji u biblioteci.");
}
}

iznajmiKnjigu(id : number):boolean{
const knjiga = this.knjige.find(knjiga => knjiga.id === id);
if(knjiga === undefined){
console.log("Knjiga ne postoji u biblioteci.");
return false;

}else{
const index = this.knjige.indexOf(knjiga);
if(index !== -1 && knjiga.kolicina > 1){
knjiga.kolicina -= 1;
console.log("Knjiga", knjiga.naslov, "je iznajmljena. Broj primjeraka  koji su ostali u biblioteci je:", knjiga.kolicina);
}
else if(index !== -1 && knjiga.kolicina === 1){
knjiga.kolicina -= 1;
    console.log("Knjiga", knjiga.naslov, "je iznajmljena. U biblioteci nije ostao nijedan primjerak knjige.");
}
else{
console.log("Knjiga nije dostupna za iznajmljivanje.");
return false;
}}
return true;
}

vratiKnjigu(id : number){
    const knjiga = this.knjige.find(knjiga => knjiga.id === id);
    if(knjiga === undefined){
        console.log("Knjiga ne postoji u biblioteci.");
        return false;
    }
        else{
        const index = this.knjige.indexOf(knjiga);
    if(index !== -1 && knjiga.kolicina >= 1){
    knjiga.kolicina += 1;
        console.log("Knjiga", knjiga.naslov, "je vraćena. Broj primjeraka  koji su dostupni u biblioteci je:", knjiga.kolicina);
    }
    else if(index !== -1 && knjiga.kolicina === 0){
        knjiga.kolicina += 1;
            console.log("Knjiga", knjiga.naslov, "je vraćena. U biblioteci je dostupan jedan primjerak knjige.");
    }
    else{
    console.log("Ova knjiga nije iznajmljivana.");
}
}
}}

const knjiga1 = new Knjiga({
id : 1,
    autor : "Luka Grdinić",
naslov : "Uvod u java script",
godinaIzdanja : 2023,
cijena : 10,
kolicina : 2
});
knjiga1.prikaziKnjigu();
const knjiga2 = new Knjiga({
    id : 2,
    autor : "Petar Petrović Njegoš",
    naslov : "Gorski vijenac",
    godinaIzdanja : 2021,
    cijena : 15,
    kolicina : 1
});

//const knjiga3 = new Knjiga();
const biblioteka = new Biblioteka();
biblioteka.dodajKnjige(knjiga1);
biblioteka.dodajKnjige(knjiga2);
biblioteka.prikaziKnjige();
/*biblioteka.iznajmiKnjigu(knjiga1);
biblioteka.vratiKnjigu(knjiga1);
biblioteka.iznajmiKnjigu(knjiga1);
biblioteka.iznajmiKnjigu(knjiga1);
biblioteka.vratiKnjigu(knjiga1);
biblioteka.vratiKnjigu(knjiga1);
biblioteka.iznajmiKnjigu(knjiga1);
biblioteka.iznajmiKnjigu(knjiga1);
biblioteka.iznajmiKnjigu(knjiga1);
biblioteka.izbaciKnjigu(knjiga1);
biblioteka.prikaziKnjige();
biblioteka.izbaciKnjigu(knjiga1);*/

const ognjen  = new NovaMusterija({
    ime : "Ognjen",
    prezime : "Macanović",
godine : 15,
brojIznajmljenihKnjiga : 0,
stanjeRacuna : 30,
iznajmljeneKnjige: []
}); 

ognjen.iznajmiKnjigu(biblioteka, 1);
ognjen.iznajmiKnjigu(biblioteka, 1);
ognjen.dopunaRacuna(15);
const ivana = new MusterijaSaKarticomBiblioteke({
ime : "Ivana",
prezime: "Ivanović",
godine: 45,
brojIznajmljenihKnjiga: 0,
stanjeRacuna: 20,
iznajmljeneKnjige: []},
0.4
);

ivana.iznajmiKnjigu(biblioteka, 2);
ivana.vratiKnjigu(biblioteka, 2);
ivana.iznajmiKnjigu(biblioteka, 2);

ivana.vratiKnjigu(biblioteka, 2);
ivana.iznajmiKnjigu(biblioteka, 2);
ivana.vratiKnjigu(biblioteka, 2);
ivana.iznajmiKnjigu(biblioteka, 2);