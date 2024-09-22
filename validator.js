var validirajIme = function (inputIme, formaPrijavaInputImeGreska, poruke) {
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
var validirajEmail = function (inputEmail, formaPrijavaInputEmailGreska, poruke) {
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
var validirajUrl = function (inputUrl, formaPrijavaInputUrlGreska, poruke) {
    var inputUrlVrijednost = inputUrl.value;
    var regexUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w .-]*)*\/?$/i;
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
var validirajProblem = function (inputProblem, formaPrijavaInputProblemGreska, poruke) {
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
