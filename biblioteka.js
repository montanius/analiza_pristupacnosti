import { Musterija } from "./classes/Musterija.class.js";
import { MusterijaSaKarticomBiblioteke } from "./classes/musterijaSaKarticomBiblioteke.class.js";
import { Knjiga } from "./classes/Knjiga.class.js";
import { Biblioteka } from "./classes/biblioteka.class.js";
const knjiga1 = new Knjiga({
    id: 1,
    autor: "Luka Grdinić",
    naslov: "Uvod u java script",
    godinaIzdanja: 2023,
    cijena: 10,
    kolicina: 2
});
knjiga1.prikaziKnjigu();
const knjiga2 = new Knjiga({
    id: 2,
    autor: "Petar Petrović Njegoš",
    naslov: "Gorski vijenac",
    godinaIzdanja: 2021,
    cijena: 15,
    kolicina: 1
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
const ognjen = new Musterija({
    ime: "Ognjen",
    prezime: "Macanović",
    godine: 15,
    brojIznajmljenihKnjiga: 0,
    stanjeRacuna: 30,
    iznajmljeneKnjige: []
});
ognjen.iznajmiKnjigu(biblioteka, 1);
ognjen.iznajmiKnjigu(biblioteka, 1);
ognjen.dopunaRacuna(15);
const ivana = new MusterijaSaKarticomBiblioteke({
    ime: "Ivana",
    prezime: "Ivanović",
    godine: 45,
    brojIznajmljenihKnjiga: 0,
    stanjeRacuna: 20,
    iznajmljeneKnjige: []
}, 0.4);
ivana.iznajmiKnjigu(biblioteka, 2);
ivana.vratiKnjigu(biblioteka, 2);
ivana.iznajmiKnjigu(biblioteka, 2);
ivana.vratiKnjigu(biblioteka, 2);
ivana.iznajmiKnjigu(biblioteka, 2);
ivana.vratiKnjigu(biblioteka, 2);
ivana.iznajmiKnjigu(biblioteka, 2);
