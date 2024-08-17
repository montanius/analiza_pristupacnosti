class Osoba {
ime : string;
godine : number; 
predstaviSe(){
console.log("Zdravo, moje ime je", this.ime, "i imam", this.godine, "godina.")
}
proslaviRodjendan(){
this.godine ++;
}
constructor(ime:string, godine:number){
this.ime = ime;
this.godine = godine;
}
}
const goran = new Osoba("Goran", 46); 
const luka = new Osoba("Luka", 33);
const osobe:Osoba[] = [goran, luka];
osobe.forEach(osoba => osoba.predstaviSe());
luka.proslaviRodjendan();
luka.proslaviRodjendan();
luka.proslaviRodjendan();
luka.predstaviSe();