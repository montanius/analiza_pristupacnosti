var inputIme = document.getElementById("ime");
var formaPrijavaInputImeGreska = document.getElementById("formaPrijavaInputImeGreska");
var inputEmail = document.getElementById("mail");
var formaPrijavaInputEmailGreska = document.getElementById("formaPrijavaInputEmailGreska");
var inputUrl = document.getElementById("url");
var formaPrijavaInputUrlGreska = document.getElementById("formaPrijavaInputUrlGreska");
var inputProblem = document.getElementById("problem");
var formaPrijavaInputProblemGreska = document.getElementById("formaPrijavaInputProblemGreska");
var formaPrijava = document.getElementById("formaPrijava");
var uspjesnaPrijava = document.getElementById("uspjesnaPrijava");
var validirajIme = function () {
    var inputImeVrijednost = inputIme.value;
    var regexIme = /^[a-zA-Z]+$/;
    if (!inputImeVrijednost) {
        formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeObavezno"];
        formaPrijavaInputImeGreska.style.display = "block";
        return false;
    }
    else if (inputImeVrijednost.length > 100) {
        formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeKarakteri"];
        formaPrijavaInputImeGreska.style.display = "block";
        return false;
    }
    else if (!regexIme.test(inputImeVrijednost)) {
        formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeDozvoljeniZnaci"];
        formaPrijavaInputImeGreska.style.display = "block";
        return false;
    }
    else {
        formaPrijavaInputImeGreska.style.display = "none";
        return true;
    }
};
inputIme.addEventListener("input", validirajIme);
var validirajEmail = function () {
    var inputEmailVrijednost = inputEmail.value;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputEmailVrijednost) {
        formaPrijavaInputEmailGreska.textContent = poruke["formaPrijavaInputEmailObavezno"];
        formaPrijavaInputEmailGreska.style.display = "block";
        return false;
    }
    else if (!regexEmail.test(inputEmailVrijednost)) {
        formaPrijavaInputEmailGreska.textContent = poruke["formaPrijavaInputEmailDozvoljeniZnaci"];
        formaPrijavaInputEmailGreska.style.display = "block";
        return false;
    }
    else {
        formaPrijavaInputEmailGreska.style.display = "none";
        return true;
    }
};
inputEmail.addEventListener("input", validirajEmail);
var validirajUrl = function () {
    var inputUrlVrijednost = inputUrl.value;
    var regexUrl = /^(https?:\/\/)?([^\s.$?#].[^\s]*)$/i;
    if (!inputUrlVrijednost) {
        formaPrijavaInputUrlGreska.textContent = poruke["formaPrijavaInputUrlObavezno"];
        formaPrijavaInputUrlGreska.style.display = "block";
        return false;
    }
    else if (!regexUrl.test(inputUrlVrijednost)) {
        formaPrijavaInputUrlGreska.textContent = poruke["formaPrijavaInputUrlDozvoljeniZnaci"];
        formaPrijavaInputUrlGreska.style.display = "block";
        return false;
    }
    else {
        formaPrijavaInputUrlGreska.style.display = "none";
        return true;
    }
};
inputUrl.addEventListener("input", validirajUrl);
var validirajProblem = function () {
    var inputProblemVrijednost = inputProblem.value;
    if (!inputProblemVrijednost) {
        formaPrijavaInputProblemGreska.textContent = poruke["formaPrijavaInputProblemObavezno"];
        formaPrijavaInputProblemGreska.style.display = "block";
        return false;
    }
    else {
        formaPrijavaInputProblemGreska.style.display = "none";
        return true;
    }
};
inputProblem.addEventListener("input", validirajProblem);
//&& validirajEmail() && validirajUrl() && validirajProblem()
formaPrijava.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validirajIme() && validirajEmail() && validirajUrl() && validirajProblem()) {
        formaPrijava.style.display = "none";
        uspjesnaPrijava.style.display = "block";
    }
});
