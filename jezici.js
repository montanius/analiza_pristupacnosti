var poruke = {};
var jezik = document.getElementById("jezik");
function postaviJezik(odabraniJezik) {
    if (odabraniJezik === "crnogorski") {
        fetch("cg.json").then(function (odgovor) { return odgovor.json(); }).then(function (prevodi) {
            poruke = prevodi;
            podesiPrevode();
        });
    }
    else {
        fetch("en.json").then(function (odgovor) { return odgovor.json(); }).then(function (prevodi) {
            poruke = prevodi;
            podesiPrevode();
        });
    }
}
function podesiPrevodUHtmlElement(poruke, idElementa) {
    var element = document.getElementById(idElementa);
    if (element) {
        element.textContent = poruke[idElementa];
    }
}
function podesiPrevode() {
    var idNizElemenataZaPrevod = ["naslovDokumenta", "glavniNaslov", "navigacijaStavkaJedan", "navigacijaStavkaDva", "navigacijaStavkaTri", "naslovJedan", "naslovJedanPasusJedan", "naslovDva", "naslovDvaPasusJedan", "naslovDvaJedan", "formaPrijavaInputIme", "formaPrijavaInputEmail", "formaPrijavaInputUrl", "formaPrijavaInputProblem", "formaPrijavaInputFile", "formaPrijavaInputSubmit", "uspjesnaPrijava", "naslovTri", "naslovTriPasusJedan", "telefon", "kontaktMail", "kontaktFacebook", "kontaktInstagram", "footerPasusJedan"];
    document.title = poruke["naslovDokumenta"];
    var formaSubmit = document.getElementById("formaPrijavaInputSubmit");
    formaSubmit.value = poruke["formaPrijavaInputSubmit"];
    idNizElemenataZaPrevod.forEach(function (id) {
        podesiPrevodUHtmlElement(poruke, id);
        { }
    });
}
function izmjenaJezika() {
    var odabraniJezik = jezik.value;
    localStorage.setItem("poslednjiOdabraniJezik", odabraniJezik);
    postaviJezik(odabraniJezik);
}
var poslednjiOdabraniJezik = localStorage.getItem("poslednjiOdabraniJezik");
if (poslednjiOdabraniJezik) {
    jezik.value = poslednjiOdabraniJezik;
}
postaviJezik(poslednjiOdabraniJezik !== null && poslednjiOdabraniJezik !== void 0 ? poslednjiOdabraniJezik : "crnogorski");
jezik.addEventListener("change", izmjenaJezika);
