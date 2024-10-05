
export var validirajProblem = function (inputProblem, formaPrijavaInputProblemGreska, poruke) {
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



export var  validirajDaNijePrazno = function(text:string){
if(text === ""){
return false;
}
else{
return true;
}
}

export var validirajMaksimalnuDuzinu = function(text: string, duzinaTeksta:number){
if(text.length > duzinaTeksta){
return false;
}
else{
return true;
}
}

export var validirajIme = function(ime:string){
    var regexIme = /^[\p{L}'-]+$/u;
    return regexIme.test(ime);
}

export var validirajEmail = function (email:string) {
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
};

export var validirajUrl = function (url:string) {
var regexUrl = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/\w .-]*)*\/?$/i;
return regexUrl.test(url);
};