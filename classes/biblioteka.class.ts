import { Knjiga } from "./Knjiga.class";

export class Biblioteka {
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

