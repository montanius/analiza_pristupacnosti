var Knjiga = /** @class */ (function () {
    function Knjiga(autor, naslov, godinaIzdanja, cijena, kolicina) {
        this.naslov = naslov;
        this.autor = autor;
        this.godinaIzdanja = godinaIzdanja;
        this.cijena = cijena;
        this.kolicina = kolicina;
    }
    Knjiga.prototype.prikaziKnjigu = function () {
        console.log(this.autor, "\n", this.naslov, "\n", this.godinaIzdanja, "\n", this.cijena, "\n", this.kolicina);
    };
    return Knjiga;
}());
var Biblioteka = /** @class */ (function () {
    function Biblioteka() {
        this.knjige = [];
    }
    Biblioteka.prototype.prikaziKnjige = function () {
        console.log(this.knjige);
    };
    Biblioteka.prototype.dodajKnjige = function (knjiga) {
        this.knjige.push(knjiga);
        console.log("Knjiga", knjiga.naslov, "je dodata u biblioteku. Broj dodatih primjeraka je", knjiga.kolicina);
    };
    Biblioteka.prototype.izbaciKnjigu = function (knjiga) {
        var index = this.knjige.indexOf(knjiga);
        if (index !== -1) {
            this.knjige.splice(index, 1);
            console.log("Svi primjerci knjige", knjiga.naslov, " su izbačeni iz biblioteke.");
        }
        else {
            console.log("Knjiga", knjiga.naslov, "ne postoji u biblioteci.");
        }
    };
    Biblioteka.prototype.iznajmiKnjigu = function (knjiga) {
        var index = this.knjige.indexOf(knjiga);
        if (index !== -1 && knjiga.kolicina > 1) {
            knjiga.kolicina -= 1;
            console.log("Knjiga", knjiga.naslov, "je iznajmljena. Broj primjeraka  koji su ostali u biblioteci je:", knjiga.kolicina);
        }
        else if (index !== -1 && knjiga.kolicina === 1) {
            knjiga.kolicina -= 1;
            console.log("Knjiga", knjiga.naslov, "je iznajmljena. U biblioteci nije ostao nijedan primjerak knjige.");
        }
        else {
            console.log("Knjiga nije dostupna za iznajmljivanje.");
        }
    };
    Biblioteka.prototype.vratiKnjigu = function (knjiga) {
        var index = this.knjige.indexOf(knjiga);
        if (index !== -1 && knjiga.kolicina >= 1) {
            knjiga.kolicina += 1;
            console.log("Knjiga", knjiga.naslov, "je vraćena. Broj primjeraka  koji su dostupni u biblioteci je:", knjiga.kolicina);
        }
        else if (index !== -1 && knjiga.kolicina === 0) {
            knjiga.kolicina += 1;
            console.log("Knjiga", knjiga.naslov, "je vraćena. U biblioteci je dostupan jedan primjerak knjige.");
        }
        else {
            console.log("Ova knjiga nije iznajmljivana.");
        }
    };
    return Biblioteka;
}());
var knjiga1 = new Knjiga("Luka Grdinić", "Uvod u Java Script", 2023, 10, 2);
knjiga1.prikaziKnjigu();
var knjiga2 = new Knjiga("Petar Petrović Njegoš", "Gorski Vijenac", 2021, 15, 1);
var biblioteka = new Biblioteka();
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
