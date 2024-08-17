var Osoba = /** @class */ (function () {
    function Osoba(ime, godine) {
        this.ime = ime;
        this.godine = godine;
    }
    Osoba.prototype.predstaviSe = function () {
        console.log("Zdravo, moje ime je", this.ime, "i imam", this.godine, "godina.");
    };
    Osoba.prototype.proslaviRodjendan = function () {
        this.godine++;
    };
    return Osoba;
}());
var goran = new Osoba("Goran", 46);
var luka = new Osoba("Luka", 33);
var osobe = [goran, luka];
osobe.forEach(function (osoba) { return osoba.predstaviSe(); });
luka.proslaviRodjendan();
luka.proslaviRodjendan();
luka.proslaviRodjendan();
luka.predstaviSe();
