const inputIme = document.getElementById("ime") as HTMLInputElement;
const formaPrijavaInputImeGreska = document.getElementById("formaPrijavaInputImeGreska") as HTMLParagraphElement;
const inputEmail = document.getElementById("mail") as HTMLInputElement;
const formaPrijavaInputEmailGreska = document.getElementById("formaPrijavaInputEmailGreska") as HTMLInputElement;
const inputUrl = document.getElementById("url") as HTMLInputElement;
const formaPrijavaInputUrlGreska = document.getElementById("formaPrijavaInputUrlGreska") as HTMLInputElement;
const inputProblem = document.getElementById("problem") as HTMLInputElement;
const formaPrijavaInputProblemGreska = document.getElementById("formaPrijavaInputProblemGreska") as HTMLInputElement;
const formaPrijava = document.getElementById("formaPrijava") as HTMLElement;
const uspjesnaPrijava = document.getElementById("uspjesnaPrijava") as HTMLParagraphElement;

const validirajIme = () => {
    const inputImeVrijednost = inputIme.value;
        const regexIme = /^[a-zA-Z]+$/;
    if(!inputImeVrijednost){
    formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeObavezno"];  
    formaPrijavaInputImeGreska.style.display = "block";
    return false;
}    
else if(inputImeVrijednost.length > 100){
formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeKarakteri"];
formaPrijavaInputImeGreska.style.display = "block";
return false;
}
else if(!regexIme.test(inputImeVrijednost)){
formaPrijavaInputImeGreska.textContent = poruke["formaPrijavaInputImeDozvoljeniZnaci"];
formaPrijavaInputImeGreska.style.display = "block";
return false;
}
else {
        formaPrijavaInputImeGreska.style.display = "none";
                        return true;
}
}    ;
            
inputIme.addEventListener("input", validirajIme);

const validirajEmail = () => {
const inputEmailVrijednost = inputEmail.value;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!inputEmailVrijednost){
formaPrijavaInputEmailGreska.textContent = poruke["formaPrijavaInputEmailObavezno"];
formaPrijavaInputEmailGreska.style.display = "block";
return false;
}
else if(!regexEmail.test(inputEmailVrijednost)){
formaPrijavaInputEmailGreska.textContent = poruke["formaPrijavaInputEmailDozvoljeniZnaci"];
formaPrijavaInputEmailGreska.style.display = "block";
return false;
}
else{
formaPrijavaInputEmailGreska.style.display = "none";
return true;
}
            };
inputEmail.addEventListener("input", validirajEmail);
            
const validirajUrl = () => {
const inputUrlVrijednost = inputUrl.value;
const regexUrl = /^(https?:\/\/)?([^\s.$?#].[^\s]*)$/i;
if(!inputUrlVrijednost){
formaPrijavaInputUrlGreska.textContent = poruke["formaPrijavaInputUrlObavezno"];
formaPrijavaInputUrlGreska.style.display = "block";
return false;
}
else if(!regexUrl.test(inputUrlVrijednost)){
formaPrijavaInputUrlGreska.textContent = poruke["formaPrijavaInputUrlDozvoljeniZnaci"];
formaPrijavaInputUrlGreska.style.display = "block";
return false;
}
else{
formaPrijavaInputUrlGreska.style.display = "none";
return true;
}
};
inputUrl.addEventListener("input", validirajUrl);

const validirajProblem = () => {
const inputProblemVrijednost = inputProblem.value;
if(!inputProblemVrijednost){
formaPrijavaInputProblemGreska.textContent = poruke["formaPrijavaInputProblemObavezno"];
formaPrijavaInputProblemGreska.style.display = "block";
return false;
}
else{
formaPrijavaInputProblemGreska.style.display = "none";
return true;
}
}
inputProblem.addEventListener("input", validirajProblem);

//&& validirajEmail() && validirajUrl() && validirajProblem()

formaPrijava.addEventListener("submit", function(event){
    event.preventDefault();
    if (validirajIme() && validirajEmail() && validirajUrl() && validirajProblem()) {
                formaPrijava.style.display = "none";
                uspjesnaPrijava.style.display = "block";
    }
});


