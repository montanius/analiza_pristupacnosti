class Knjiga {
        autor : string;
        naslov : string;
    godinaIzdanja : number;
        cijena : number;
        kolicina : number;
            constructor(autor:string, naslov:string, godinaIzdanja:number,        cijena:number, kolicina:number){
this.naslov = naslov;
this.autor = autor;
this.godinaIzdanja = godinaIzdanja;
this.cijena = cijena;
this.kolicina = kolicina;

    }
    prikaziKnjigu(){
console.log(this.autor, "\n", this.naslov, "\n", this.godinaIzdanja, "\n", this.cijena, "\n", this.kolicina);
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

iznajmiKnjigu(knjiga : Knjiga){
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
}
}

vratiKnjigu(knjiga : Knjiga){
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
}
const knjiga1 = new Knjiga( "Luka Grdinić","Uvod u Java Script", 2023, 10, 2);
knjiga1.prikaziKnjigu();
const knjiga2 = new Knjiga("Petar Petrović Njegoš","Gorski Vijenac", 2021, 15, 1);
const biblioteka = new Biblioteka();
biblioteka.dodajKnjige(knjiga1);
biblioteka.dodajKnjige(knjiga2);
biblioteka.prikaziKnjige();
biblioteka.iznajmiKnjigu(knjiga1);
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
biblioteka.izbaciKnjigu(knjiga1);